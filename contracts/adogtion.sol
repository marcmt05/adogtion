// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.6.0/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract AdogtionNFT is ERC721 {
    uint256 _tokenId;
    uint256 public totalSupply;
    address public owner;
    address public adopter;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    struct Adopters {
        address adoptersAddress;
    }

    Adopters[] public adopters;
    

    constructor() ERC721("AdogtionNFT", "ADOGS") {
        owner = msg.sender;
    }

    function _baseURI() override internal view virtual onlyOwner returns (string memory) {
        return "https://ipfs.io/ipfs/QmeZc9ayhXSV9hSucjf19qm4wvy6p1dKjk3BZXTKQwu7T8/";
    }

    function safeMint() public onlyOwner {
        require(totalSupply < 9, "No se pueden mintear mas NFT por el momento!");
        _tokenId++;
        _safeMint(owner, _tokenId);
        adopters.push(Adopters(owner));
        unchecked {
            totalSupply++;
        }
    }

    function tokenURI(uint256 tokenId) public view override (ERC721) returns (string memory) {
        return string(abi.encodePacked(super.tokenURI(tokenId),".json"));
    }

    function transferNFT(address to,  uint256 _id) public onlyOwner {
        require(to != owner, "Ya eres el propietario del token!");
        transferFrom(owner, to, _id);
        Adopters storage newAdopter = adopters[_id-1];
        newAdopter.adoptersAddress = to;
    }

    function getAdopters(uint _index) public view returns (address) {
        Adopters storage newAdopter = adopters[_index-1];
        return (newAdopter.adoptersAddress);
        
    }

    function directorio(uint256 _idPerro) view public returns (string memory directorioBase) {
        if (_idPerro == 1) {
            require(totalSupply >= 1, "No existe");
            return "https://ipfs.io/ipfs/QmQBBTLASCDHtvSZcUjT8BNyorwg75PmMCaJngx52VwYm2/1";
        } else if(_idPerro == 2) {
            require(totalSupply >= 2, "No existe");
            return "https://ipfs.io/ipfs/QmQBBTLASCDHtvSZcUjT8BNyorwg75PmMCaJngx52VwYm2/2";
        } else if(_idPerro == 3) {
            require(totalSupply >= 3, "No existe");
            return "https://ipfs.io/ipfs/QmQBBTLASCDHtvSZcUjT8BNyorwg75PmMCaJngx52VwYm2/3";
        } else if(_idPerro == 4) {
            require(totalSupply >= 4, "No existe");
            return "https://ipfs.io/ipfs/QmQBBTLASCDHtvSZcUjT8BNyorwg75PmMCaJngx52VwYm2/4";
        } else if(_idPerro == 5) {
            require(totalSupply >= 5, "No existe");
            return "https://ipfs.io/ipfs/QmQBBTLASCDHtvSZcUjT8BNyorwg75PmMCaJngx52VwYm2/5";
        } else if(_idPerro == 6) {
            require(totalSupply >= 6, "No existe");
            return "https://ipfs.io/ipfs/QmQBBTLASCDHtvSZcUjT8BNyorwg75PmMCaJngx52VwYm2/6";
        } else if(_idPerro == 7) {
            require(totalSupply >= 7, "No existe");
            return "https://ipfs.io/ipfs/QmQBBTLASCDHtvSZcUjT8BNyorwg75PmMCaJngx52VwYm2/7";
        } else if(_idPerro == 8) {
            require(totalSupply == 8, "No existe");
            return "https://ipfs.io/ipfs/QmQBBTLASCDHtvSZcUjT8BNyorwg75PmMCaJngx52VwYm2/8";
        }
    }  
}