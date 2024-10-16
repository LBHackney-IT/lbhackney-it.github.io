import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ways of working',
    linkTo: '/ways-of-working',
    description: (
      <>
        Hackney's development practices and processes
      </>
    ),
  },
  {
    title: 'Architecture pillars',
    linkTo: '/architecture-pillars',
    description: (
      <>
        Principles we apply across frontend and API development.
      </>
    ),
  },
  {
    title: 'API development',
    linkTo: '/api-playbook',
    description: (
      <>
        Processes and practices we use for service and platform API development.
      </>
    ),
  },
  // {
  //   title: 'Frontend development',
  //   linkTo: '/micro-frontends', // TODO this should be "frontend-development", but that would break existing links. Is that a problem?
  //   description: (
  //     <>
  //       Details Hackney's micro-frontend architecture.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Hackney Design System',
  //   linkTo: 'https://design-system.hackney.gov.uk/',
  //   description: (
  //     <>
  //       Hackney's frontend development toolkit of reusable components.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Product Playbook',
  //   linkTo: '/product-playbook',
  //   description: (
  //     <>
  //       Hackney's product strategy, and how the Product teams work
  //     </>
  //   ),
  // },
  // {
  //   title: 'Data Platform',
  //   linkTo: '/data-platform-playbook',
  //   description: (
  //     <>
  //       Technical details and playbooks for Data Platform users and contributors
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description, linkTo}) {
  return (
    <Link className={clsx('col col--4')} to={linkTo}>
      <div className={styles.feature}>

        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </Link>
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
