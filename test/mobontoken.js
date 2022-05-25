const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MobonToKen", () => {
    it("Should return the token name", async () => {
        const MobonToken = await ethers.getContractFactory("MobonToken");
        const mobonToKen = await MobonToken.deploy();
        await mobonToKen.deployed();

        expect(await mobonToKen.name()).to.equal("Mobon Gaming");
    });

    it("Should return the token symbol", async () => {
        const MobonToken = await ethers.getContractFactory("MobonToken");
        const mobonToken = await MobonToken.deploy();
        await mobonToken.deployed();

        expect(await mobonToken.symbol()).to.equal("MBG");
    });

    it("Should return decimals", async () => {
        const MobonToken = await ethers.getContractFactory("MobonToken");
        const mobonToken = await MobonToken.deploy();
        await mobonToken.deployed();

        expect(await mobonToken.decimals()).to.equal(18);
    });

    it("Should have total supply", async () => {
        const MobonToken = await ethers.getContractFactory("MobonToken");
        const mobonToken = await MobonToken.deploy();
        await mobonToken.deployed();

        expect(await mobonToken.totalSupply()).to.equal(ethers.BigNumber.from("1000000000000000000000000"));
    });
});