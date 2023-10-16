import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dollars MONO',
    link: '/category/dollars-mono',
    Svg: '/img/motion-capture.png',
    description1: (
      <>
        用单摄像头或者视频文件，
      </>
    ),
    description2: (
      <>
        实时捕捉表情、手势、全身动作！
      </>
    ),
  },
  {
    title: 'Dollars VIVA',
    link: '/category/dollars-viva',
    Svg: '/img/motion-capture-viva.png',
    description1: (
      <>
        借助于 HTC Vive 硬件，使用六点追踪，
      </>
    ),
    description2: (
      <>
        在减轻动捕演员负担的同时，提供低成本高质量的全身动作捕捉。
      </>
    ),
  },
  {
    title: '与引擎以及 DCC 软件的整合',
    link: '/category/%E4%B8%8E%E5%BC%95%E6%93%8E%E4%BB%A5%E5%8F%8A-dcc-%E8%BD%AF%E4%BB%B6%E7%9A%84%E6%95%B4%E5%90%88',
    Svg: '/img/digital-platform.png',
    description1: (
      <>
        了解如何在游戏引擎以及 3D 软件中
      </>
    ),
    description2: (
      <>
        使用道乐师的数据流送以及 BVH 文件
      </>
    ),
  },
];

function Feature({Svg, title, description1, description2, link}) {
  return (
    <div className={clsx('col col--4')} >
      <a href={link} style={{ textDecoration: 'none'}}>
          <div className="text--center">
            <img src={Svg} alt="alternative text" className={styles.featureSvg} />
          </div>
          <div className="text--center padding-horiz--md">
            <h3 style={{marginTop:'2em'}}>{title}</h3>
            <p>{description1}<br/>{description2}</p>
            <p></p>
          </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
