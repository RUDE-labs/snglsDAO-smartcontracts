 
pragma solidity 0.5.13;

interface ProposalExecuteInterface {
    function executeProposal(bytes32 _proposalId, int _decision) external returns(bool);
}