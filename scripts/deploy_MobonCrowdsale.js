// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// eslint-disable-next-line import/no-extraneous-dependencies
const { ethers } = require("hardhat");

async function latestTime() {
    const block = await ethers.provider.getBlock("latest");
    return block.timestamp;
}

const duration = {
    seconds(val) {
        return val;
    },
    minutes(val) {
        return val * this.seconds(60);
    },
    hours(val) {
        return val * this.minutes(60);
    },
    days(val) {
        return val * this.hours(24);
    },
    weeks(val) {
        return val * this.days(7);
    },
    years(val) {
        return val * this.days(365);
    },
};

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const MobonToken = await ethers.getContractFactory("MobonToken");
    const mobonToken = await MobonToken.deploy();

    await mobonToken.deployed();
    console.log("ITManToken deployed to:", mobonToken.address);
    console.log("Name", await mobonToken.name());
    console.log("Symbol", await mobonToken.symbol());
    console.log("Decimals", await mobonToken.decimals());
    const totalSupply = await mobonToken.totalSupply();
    console.log("Total Supply", totalSupply);
    const owner = await mobonToken.owner();
    console.log("Owner", owner);

    // deploy crowdsale contract
    const MobonCrowdsale = await ethers.getContractFactory("MobonCrowdsale");
    const rate = 500; // 500 wei per token
    const latestBlockTime = await latestTime();
    const openingTime = latestBlockTime + duration.minutes(1);
    const closeTime = openingTime + duration.weeks(1); // 1 week
    console.log("openingTime", openingTime);
    console.log("closeTime", closeTime);
    const mobonCrowdsale = await MobonCrowdsale.deploy(
        rate,
        owner,
        mobonToken.address,
        owner,
        openingTime,
        closeTime
    );

    await mobonCrowdsale.deployed();
    console.log("ITManTokenCrowdsale deployed to:", mobonCrowdsale.address);

    // approve crowdsale contract to spend 70% tokens
    await mobonToken.approve(
        mobonCrowdsale.address,
        totalSupply.mul(ethers.BigNumber.from(70)).div(ethers.BigNumber.from(100))
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });