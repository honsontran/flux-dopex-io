import cx from 'classnames';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

import Section from 'components/UI/Section';
import Typography from 'components/UI/Typography';
import LedgerPrime from 'assets/home/png/ledger_prime.png';
import OrcaTraders from 'assets/home/png/orca_traders.png';
import Orthogonal from 'assets/home/png/orthogonal_trading.png';
import Tetranode from 'assets/home/png/tetranode.png';
import DefiGod from 'assets/home/png/defi_god.png';
import Pattern from 'assets/home/png/pattern.png';
import Dcv from 'assets/home/png/dcv.png';
import SccInvestments from 'assets/home/svg/scc_investments.svg';
import Debase from 'assets/home/svg/debase.svg';
import HardwoodOrcz from 'assets/home/svg/hardwood_orcz.svg';

const INVESTORS_DATA = [
  {
    name: 'TΞtranodΞ',
    alt: 'Tetranode',
    src: Tetranode,
    imgClasses: 'rounded-full h-16 lg:h-24',
  },
  {
    name: 'DefiGod',
    alt: 'DefiGod',
    src: DefiGod,
    imgClasses: 'rounded-full h-16 lg:h-24',
  },

  {
    alt: 'Orthogonal',
    src: Orthogonal,
    imgClasses: 'filter h-24 dark:invert dark:brightness-0',
  },
  {
    alt: 'LedgerPrime',
    src: LedgerPrime,
    imgClasses: 'filter h-24 dark:invert dark:brightness-0',
  },
  {
    alt: 'OrcaTraders',
    src: OrcaTraders,
    imgClasses: 'filter h-24 dark:invert dark:brightness-0',
  },
  {
    alt: 'Pattern',
    src: Pattern,
    imgClasses: 'filter h-36 dark:invert dark:brightness-0',
  },
  {
    alt: 'SCC Investments',
    src: SccInvestments,
    imgClasses: 'filter h-40 dark:invert dark:brightness-0',
  },
  {
    alt: 'Debase',
    src: Debase,
    imgClasses: 'h-14 lg:h-24 dark:invert dark:brightness-0 filter',
  },
  {
    alt: 'Hardwood Orcz',
    src: HardwoodOrcz,
    imgClasses: 'h-14 lg:h-20 dark:invert dark:brightness-0 filter',
  },
  {
    alt: 'DCV',
    src: Dcv,
    imgClasses: 'h-18 lg:h-24 invert filter dark:filter-none',
  },
];

interface GridItemProps {
  src: string;
  alt: string;
  name?: string;
  imgClasses?: string;
  className?: string;
}

const GridItem = ({ src, alt, name, imgClasses, className }: GridItemProps) => {
  return (
    <Box
      className={cx(
        className,
        'flex flex-row items-center justify-center lg:justify-start w-64 lg:w-80'
      )}
    >
      <img src={src} alt={alt} className={cx(imgClasses, 'object-contain')} />
      {name ? (
        <h1 className="ml-8 text-3xl text-black dark:text-white">{name}</h1>
      ) : null}
    </Box>
  );
};

const Investors = () => {
  const { t } = useTranslation('home');

  return (
    <Section>
      <Typography variant="h5" className="text-center">
        {t('investorsAndPartners')}
      </Typography>
      <Box className="mt-24 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-20 gap-x-10">
        {INVESTORS_DATA.map((data) => {
          return <GridItem key={data.alt} {...data} />;
        })}
      </Box>
    </Section>
  );
};

export default Investors;
