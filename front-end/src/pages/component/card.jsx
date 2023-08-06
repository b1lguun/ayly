import React from 'react';
import './card.scss';

const Collection = () => {
  const collectionsData = [
    {
      id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Tavan_Bogd_Mountain.jpg',
      description: 'Altai Tavan Bogd',
    },
    {
      id: 2,
      url: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTLjC8q-R-B9sCx0cC_B5Q65J3AK2IZewsAQMYIU21tqUWT0M3TufErRdtmGEFWHDnV',
      description: 'Khuvsgul Lake',
    },
    {
        id: 3,
        url: 'https://news.mn/wp-content/archive1/english/photo/2011/9/1edc9547748a3bff/b3e5d62cf5b701e4big.jpg',
        description: 'Karakorum',
    },
    {
        id: 4,
        url: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTcPlPRewqzERu-fDXGZdv6Y5bsRw3Olg-TCoeKIWkuZk9hly3JkRnkTfgNh1Q1AoH4',
        description: 'Gobi Desert',
    },
    {
        id: 5,
        url: 'https://www.escapetomongolia.com/__data/assets/image/0021/6546/Bayanzag-Flaming-Cliffs-anton-petrus.livejournal.com.jpg',
        description: 'Bayan Zag',
    },
    {
        id: 6,
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Amarbayasgalant_monastery_temple_01.JPG',
        description: 'Amarbayasgalant Monastry',
    },
    {
        id: 7,
        url: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQXcIuige2J2EcHBVYQsoNYGvTnYF3-kqfmPQwZItgCcwQxibgC4ZnhGd4YTjDGXNU-',
        description: 'Altai Mountains',
    },
    {
        id: 8,
        url: 'https://www.mongolia-trips.com/cdn/mn-public/khyargas_lake.jpg',
        description: 'Khyargas Lake',
    },
    {
        id: 9,
        url: 'https://www.sidecarphoto.co/wp-content/uploads/2019/09/erdene-zuu-monastery.jpg',
        description: 'Erdene Zuu Monastery',
    },
    {
        id: 10,
        url: 'https://media.kasperskycontenthub.com/wp-content/uploads/sites/67/2019/09/13154000/pustynya-gobi-ushhele-elyn-am-1.jpg',
        description: 'Yolyn Am',
    },
    {
        id: 11,
        url: 'https://tour2mongolia.com/public/storage/destinations/February2021/uIQQCU3MdRI14R7HWoqX-large.jpg',
        description: 'Menen Steppe',
    },
    {
        id: 12,
        url: 'https://e8s3v3w7.rocketcdn.me/wp-content/uploads/2017/11/mongolei-der-uvs-nuur-nationalpark-beherbergt-den-grocc88ssten-see-der-mongolei-der-aufgrund-seines-salzgehaltes-fucc88r-viele-seevocc88gel-einen-wichtigen-lebensraum-darstellt-medvedevv-696x464.jpg',
        description: 'Uvs Lake',
    },
  ];

  return (
    <div>
      <div className="collections-wrapper">
        <h1>Best Places to Visit in Mongolia</h1>
        <hr
          className="w-12 h-0.5 bg-yellow-400 mt-0 ml-0"
        />
      </div>
      <div className="cards-wrapper grid grid-cols-3 gap-4">
        {collectionsData.map(({ url, id, description }) => (
          <CollectionCard key={id} imageUrl={url} description={description} />
        ))}
      </div>
    </div>
  );
};

const CollectionCard = ({ imageUrl, description }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="collection-card-wrapper">
      <div className="card-parent">
        <div className="card-child" style={cardStyle}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
