import { useEffect } from 'react'

const LandingPage = () => {
  useEffect(() => {
    document.title = "Cipher Labs | Leading Tool & Software Development for DeFi Platforms"
    document.getElementsByTagName("META")[2].content="Pushing boundaries in DeFi, Cipher Labs crafts bespoke software solutions and tools tailored for today's cutting-edge decentralized platforms.";
  }, [])

  return (
    <div className="flex flex-col gap-6 items-center mx-auto text-center sm:max-w-[514px] xl:max-w-[768px] 2xl:max-w-[1028px]">
      <p className="text-5xl xl:text-[64px] 2xl:text-[96px] font-black text-secondary" style={{lineHeight: 'normal'}}>
        Blockchain Craftsmen
      </p>
      <p className="text-base xl:text-2xl 2xl:text-[32px] font-medium text-primary" style={{lineHeight: 'normal'}}>
        Specialising in Web3, we're committed to revolutionising the DeFi landscape
        through advanced trading tools, active governance participation, and
        bespoke software development.
      </p>
    </div>
  );
};

export default LandingPage;
