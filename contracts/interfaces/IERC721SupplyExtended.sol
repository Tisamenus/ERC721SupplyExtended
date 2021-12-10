// SPDX-License-Identifier: MIT

pragma solidity ^0.7.6;

interface IERC721SupplyExtended {
  function supplyOfExtension(uint256 extensionId) external view returns (uint256);

  function extensionByToken(uint256 tokenId) external view returns (uint256);

  function tokenByExtensionAndIndex(uint256 extensionId, uint256 index) external view returns (uint256);
}
