import "./home.css"
import { Navbar } from "../navbar/navbar"
import React, { useState, useEffect, useRef } from "react"
import { excelParser } from "../utils/excelParser"
export function Home({ offset }) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        document.body.style.textEmphasisColor = "#0d2a16"
      } else {
        document.body.style.textEmphasisColor = "#ffffff"
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const fileRef = useRef(null)
  const [convertedJson, setConvertedJson] = useState([])
  const [error, setError] = useState("")
  const uploadFile = async () => {
    if (fileRef?.current?.files[0]?.size > 1000000) {
      setError("File-ийн хэмжээ хэтэрсэн байна.")
      return
    }
    setError("")
    const file = fileRef.current.files[0]
    const parsedFile = await excelParser(file)
    // const jsonFile = convertMNToEN(parsedFile)
    setConvertedJson(parsedFile)
    console.log(parsedFile)
    //ene der mongo ruu create hine
  }
  return (
    <>
      <div className="home">
        {/* <Navbar offset={offset} /> */}
        <h1>home</h1>
        <button onClick={() => fileRef?.current?.click()}>
          <input
            data-cy="File-Input"
            type="file"
            hidden
            ref={fileRef}
            onChange={uploadFile}
          />
          Хавсаргах
        </button>
      </div>
    </>
  )
}

export default Home
