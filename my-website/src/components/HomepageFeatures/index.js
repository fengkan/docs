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
    title: 'Dollars DEEP',
    link: '/category/dollars-deep',
    Svg: '/img/kinect.png',
    description1: (
      <>
        在 MONO 基础上，通过使用深度摄像头，
      </>
    ),
    description2: (
      <>
        实现更稳定的位置追踪。
      </>
    ),
  },
  {
    title: 'Dollars EGAO',
    link: '/category/dollars-egao',
    Svg: '/img/face-scan.png',
    description1: (
      <>
        完全免费的摄像头面部捕捉，
      </>
    ),
    description2: (
      <>
      支持 VMC 协议，Unity 以及虚幻引擎。
      </>
    ),
  },
  {
    title: 'Dollars VIVA',
    link: '/category/dollars-viva',
    Svg: '/img/motion-capture-viva.png',
    description1: (
      <>
        使用 HTC Vive 以及兼容硬件，提供六点全身追踪，
      </>
    ),
    description2: (
      <>
        提供低成本高质量的全身动作捕捉。
      </>
    ),
  },
  {
    title: 'Dollars MOTS',
    link: '/category/dollars-mots',
    Svg: '/img/T2M.png',
    description1: (
      <>
       根据文本生成全身动作！
      </>
    ),
    description2: (
      <>
      </>
    ),
  },
  {
    title: 'Dollars LINK',
    link: '/category/dollars-link',
    Svg: '/img/link.png',
    description1: (
      <>
       使用 Live Link Face
      </>
    ),
    description2: (
      <>
      在 iClone8 中进行面部捕捉
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
        使用道乐师的数据流送以及 BVH 文件。
      </>
    ),
  },
  {
    title: '常见问题',
    link: '/faq',
    Svg: '/img/faq.png',
    description1: (
      <>
        使用道乐师产品以及整合过程中的常见问题
      </>
    ),
    description2: (
      <>
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
