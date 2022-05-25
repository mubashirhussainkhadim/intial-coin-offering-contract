# intial-coin-offering-contract

test result 
mubashirhussain@Mubashirs-MBP mobon2 % npx hardhat test
Generating typings for: 0 artifacts in dir: src/types for target: ethers-v5
Successfully generated 22 typings!
Successfully generated 22 typings for external artifacts!

  Box
    ✓ Should return the new value once it's changed

  BoxV2
    ✓ Should return the new value once it's changed
    ✓ Should increase the new value

  Greeter
Deploying a Greeter with greeting: Hello, world!
Changing greeting from 'Hello, world!' to 'Hola, mundo!'
    ✓ Should return the new greeting once it's changed

  MobonCrowdsale
    ✓ Should have 70% of Mobon tokens

  MobonToKen
    ✓ Should return the token name
    ✓ Should return the token symbol
    ✓ Should return decimals
    ✓ Should have total supply

·------------------------------|----------------------------|-------------|-----------------------------·
|     Solc version: 0.8.4      ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 30000000 gas  │
·······························|····························|·············|······························
|  Methods                                                                                              │
···············|···············|··············|·············|·············|···············|··············
|  Contract    ·  Method       ·  Min         ·  Max        ·  Avg        ·  # calls      ·  eur (avg)  │
···············|···············|··············|·············|·············|···············|··············
|  Box         ·  store        ·           -  ·          -  ·      44915  ·            2  ·          -  │
···············|···············|··············|·············|·············|···············|··············
|  BoxV2       ·  increment    ·           -  ·          -  ·      44829  ·            2  ·          -  │
···············|···············|··············|·············|·············|···············|··············
|  BoxV2       ·  store        ·           -  ·          -  ·      44915  ·            2  ·          -  │
···············|···············|··············|·············|·············|···············|··············
|  Greeter     ·  setGreeting  ·           -  ·          -  ·      35426  ·            2  ·          -  │
···············|···············|··············|·············|·············|···············|··············
|  MobonToken  ·  approve      ·           -  ·          -  ·      46941  ·            1  ·          -  │
···············|···············|··············|·············|·············|···············|··············
|  Deployments                 ·                                          ·  % of limit   ·             │
·······························|··············|·············|·············|···············|··············
|  Box                         ·           -  ·          -  ·     135679  ·        0.5 %  ·          -  │
·······························|··············|·············|·············|···············|··············
|  BoxV2                       ·           -  ·          -  ·     185887  ·        0.6 %  ·          -  │
·······························|··············|·············|·············|···············|··············
|  Greeter                     ·           -  ·          -  ·     497002  ·        1.7 %  ·          -  │
·······························|··············|·············|·············|···············|··············
|  MobonCrowdsale              ·           -  ·          -  ·    1334128  ·        4.4 %  ·          -  │
·······························|··············|·············|·············|···············|··············
|  MobonToken                  ·           -  ·          -  ·    1569250  ·        5.2 %  ·          -  │
·------------------------------|--------------|-------------|-------------|---------------|-------------·

  9 passing (972ms)
