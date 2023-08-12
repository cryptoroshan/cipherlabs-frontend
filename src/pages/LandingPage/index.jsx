const LandingPage = () => {
  return (
    <div className="flex flex-col gap-6 items-center lg:w-2/3 mx-auto text-center">
      <p className="text-5xl xl:text-[64px] 2xl:text-[96px] font-black text-secondary" style={{lineHeight: 'normal'}}>
        Blockchain Craftsmen
      </p>
      <p className="text-base xl:text-2xl 2xl:text-[32px] font-medium text-primary" style={{lineHeight: 'normal'}}>
        Specialising in Web3, we're committed to revolutionising the DeFi landscape <br/>
        through advanced trading tools, active governance participation, and <br/>
        bespoke software development.
      </p>
    </div>
  );
};

export default LandingPage;
