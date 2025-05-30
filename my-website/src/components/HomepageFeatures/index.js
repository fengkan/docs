import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// 动捕产品（1-3）
const MotionCaptureProducts = [
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
];

// 面捕产品（4-6）
const FacialCaptureProducts = [
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
    title: 'Dollars NVIS',
    link: '/category/dollars-nvis',
    Svg: '/img/nvis.png',
    description1: (
      <>
       由 NVIDIA 强力驱动，
      </>
    ),
    description2: (
      <>
      接近 iPhone 的摄像头面捕
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
];

// 创新产品（7）
const InnovativeProducts = [
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
    title: 'Dollars SOMA',
    link: '/category/dollars-soma',
    Svg: '/img/victory.png',
    description1: (
      <>
       基于摄像头的姿势、手势识别
      </>
    ),
    description2: (
      <>
      </>
    ),
  },
];

// 集成（8-9）
const IntegrationFeatures = [
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

// For the second row features, we'll use a wider layout (col--6 instead of col--4)
function AdditionalFeature({Svg, title, description1, description2, link}) {
  return (
    <div className={clsx('col col--6')} >
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

// For the innovative products, we'll use a centered layout
function InnovativeFeature({Svg, title, description1, description2, link}) {
  return (
    <div className={clsx('col col--6 offset-col--3')} >
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
        {/* 动捕产品 section */}
        <div className="row">
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>动捕产品</h2>
          </div>
        </div>
        <div className="row">
          {MotionCaptureProducts.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        
        {/* 面捕产品 section */}
        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>面捕产品</h2>
          </div>
        </div>
        <div className="row">
          {FacialCaptureProducts.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        
        {/* 创新产品 section */}
        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>交互产品</h2>
          </div>
        </div>
        <div className="row">
          {InnovativeProducts.map((props, idx) => (
            <InnovativeFeature key={idx} {...props} />
          ))}
        </div>
        
        {/* 集成 section */}
        <div className="row" style={{marginTop: '4rem'}}>
          <div className="col col--12">
            <h2 className="text--center" style={{marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold'}}>集成与常见问题</h2>
          </div>
        </div>
        <div className="row">
          {IntegrationFeatures.map((props, idx) => (
            <AdditionalFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}