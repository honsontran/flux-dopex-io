import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

import TextLink from 'components/UI/TextLink';
import Typography from 'components/UI/Typography';
import Section from 'components/UI/Section';
import ConstantYield from 'assets/home/ConstantYield';
import DeeperLiquidity from 'assets/home/DeeperLiquidity';
import MinimizeRisk from 'assets/home/MinimizeRisk';
import FullyCollateralized from 'assets/home/FullyCollateralized';
import PriceEfficiency from 'assets/home/PriceEfficiency';
import Synths from 'assets/home/Synths';
import Uniswap from 'assets/home/svg/uniswap.svg';
import Chainlink from 'assets/home/svg/chainlink.svg';
import Synthetics from 'assets/home/svg/synthetic.svg';
import SolidityFinance from 'assets/home/svg/solidity_finance.svg';
import solidified from 'assets/home/svg/solidified.svg';

interface GridItemProps {
  Icon: any;
  heading: string;
  paragraph: string;
}

const GridItem = ({ Icon, heading, paragraph }: GridItemProps) => {
  return (
    <Box className="flex space-y-4 mb-4 sm:mb-1">
      <Box className="w-20 h-20 justify-center self-center mr-3 -ml-3 sm:mt-4 sm:mr-3">
        <Icon />
      </Box>

      <Box className="flex-row sm:m-3">
        <Typography variant="h4" className="mb-2 ">
          {heading}
        </Typography>
        <Typography variant="p">{paragraph}</Typography>
      </Box>
    </Box>
  );
};

const Body = () => {
  const { t } = useTranslation('home');
  const { t: tc } = useTranslation('common');

  return (
    <Section>
      <Box className="flex flex-col rounded-2xl bg-white shadow-2xl items-center py-6 px-5 sm:p-6 dark:bg-cod-gray">
        <Box className="flex-row items-center ">
          <Typography variant="h5" className="text-center mb-6 uppercase">
            {t('body.subHeader')}
          </Typography>
          <Typography variant="h2" className="text-center mb-6 uppercase">
            {t('body.header')}
          </Typography>
          <Typography variant="p" className="mb-6 text-center">
            {t('body.paragraph')}
          </Typography>
        </Box>
        <Box>
          <Box className="grid gap-6 my-8 lg:grid-cols-2 sm:gap-x-16 sm:gap-y-10 sm:my-14 sm:px-5">
            <GridItem
              Icon={PriceEfficiency}
              heading={t('body.grid.0.heading')}
              paragraph={t('body.grid.0.paragraph')}
            />
            <GridItem
              Icon={DeeperLiquidity}
              heading={t('body.grid.1.heading')}
              paragraph={t('body.grid.1.paragraph')}
            />
            <GridItem
              Icon={MinimizeRisk}
              heading={t('body.grid.2.heading')}
              paragraph={t('body.grid.2.paragraph')}
            />
            <GridItem
              Icon={ConstantYield}
              heading={t('body.grid.3.heading')}
              paragraph={t('body.grid.3.paragraph')}
            />
            <GridItem
              Icon={FullyCollateralized}
              heading={t('body.grid.4.heading')}
              paragraph={t('body.grid.4.paragraph')}
            />
            <GridItem
              Icon={Synths}
              heading={t('body.grid.5.heading')}
              paragraph={t('body.grid.5.paragraph')}
            />
          </Box>
        </Box>
        <Box className="flex flex-col lg:mt-1 lg:flex-row">
          <Box className="flex flex-col lg:m-5 lg:py-0 lg:w-1/2">
            <Typography variant="h3" className="mb-8 text-center lg:text-left">
              {t('body.protocolUsage.header')}
            </Typography>
            <ul className="flex flex-col mb-12">
              <li className="flex flex-row mb-8 sm:mb-2 lg:mb-4 xl:mb-0">
                <img
                  src={Uniswap}
                  alt="Uniswap"
                  className="w-12 h-12 mr-6 mb-8 pt-2 md:pt-0 lg:pt-2"
                />
                <Typography variant="p">
                  {t('body.protocolUsage.header')}
                </Typography>
              </li>
              <li className="flex flex-row mb-8 sm:mb-2 lg:mb-4 xl:mb-0">
                <img
                  src={Synthetics}
                  alt="Synthetics"
                  className="w-12 h-12 mr-6 mb-8 pt-2 md:pt-0 lg:pt-2"
                />
                <Typography variant="p">
                  {t('body.protocolUsage.uma')}
                </Typography>
              </li>
              <li className="flex flex-row sm:mb-2 lg:mb-4 xl:mb-0">
                <img
                  src={Chainlink}
                  alt="Chainlink"
                  className="w-12 h-12 mr-6 mb-8 pt-2 md:pt-0 lg:pt-2"
                />
                <Typography variant="p">
                  {t('body.protocolUsage.chainlink')}
                </Typography>
              </li>
            </ul>
          </Box>
          <Box className="flex flex-col items-center lg:my-5 lg:mx-16 lg:p-4 lg:py-0 lg:items-start lg:w-1/2">
            <Typography variant="h3" className="mb-8 uppercase">
              {t('body.audits.header')}
            </Typography>
            <Box className="flex flex-row pb-4">
              <a
                href="https://solidity.finance/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={SolidityFinance}
                  alt="SolidityFinance"
                  className="w-24 h-24 self-center mr-8"
                />
              </a>
              <a
                href="https://solidified.io/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={solidified}
                  alt="Solidified"
                  className="w-24 h-24 self-center"
                />
              </a>
            </Box>
            <Box className="flex flex-col my-5 items-center lg:items-start">
              {/* <TextLink
                className="mb-2 font-light pointer-events-none"
              >
                Read the Reports ⟶
              </TextLink> */}
              <TextLink href="https://docs.dopex.io/">
                {tc('documentation')} ⟶
              </TextLink>
              <TextLink href="https://github.com/dopex-io">
                {tc('github')} ⟶
              </TextLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Body;
