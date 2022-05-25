const { expect } = require("chai");
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

describe("MobonCrowdsale", () => {
    it("Should have 70% of Mobon tokens", async () => {
        const MobonToken = await ethers.getContractFactory("MobonToken");
        const mobon = await MobonToken.deploy();
        await mobon.deployed();

        expect(await mobon.name()).to.equal("Mobon Gaming");
        expect(await mobon.symbol()).to.equal("MBG");
        expect(await mobon.decimals()).to.equal(18);
        const totalSupply = await mobon.totalSupply();
        expect(totalSupply).to.equal(ethers.BigNumber.from("1000000000000000000000000"));
        const owner = await mobon.owner();

        const latestBlockTime = await latestTime();
        const openingTime = latestBlockTime + duration.minutes(1);
        const closeTime = openingTime + duration.weeks(1); // 1 week

        const MobonCrowdsale = await ethers.getContractFactory("MobonCrowdsale");
        const rate = 500; // 500 wei per token
        const mobonCrowdsale = await MobonCrowdsale.deploy(
            rate,
            owner,
            mobon.address,
            owner,
            openingTime,
            closeTime
        );

        await mobonCrowdsale.deployed();

        await mobon.approve(
            mobonCrowdsale.address,
            totalSupply.mul(ethers.BigNumber.from(70)).div(ethers.BigNumber.from(100))
        );

        expect(await mobonCrowdsale.rate()).to.equal(rate);
        expect(await mobonCrowdsale.remainingTokens()).to.equal(ethers.BigNumber.from("700000000000000000000000"));
    });
    // TODO: add unit test for time validation
    // TODO: add unit test for token allocation
});