# Changelog

## [1.0.2] - 2020-03-26

### Added

- Basic DAO contracts.
- Absolute majority vote contract added.
- Contract for freezing tokens (any ERC20 currently).
- Global constrains contract.
- Proposal voting test script.
- Configured contracts list:    

Part                | Contract name
-------------       | -------------
 DAO core           | Avatar
 _                  | Controller
 _                  | DAOToken
 _                  | Reputation
 Voting             | AbsoluteVote
 _                  | VotingMachineCallbacks
 Schemes            | Agreement
 _                  | ContributionRewardExt
 _                  | Locking4Reputation
 _                  | LockingToken4Reputation
Global constraints  | TokenCapGC






### Changed

- SingularDTVFund contract now can deposit and withdraw rewards in ERC20 tokens. Tokens must be allowed by owner to 

## [1.0.1] - 2020-03-17

### Added

- Airdrop script with tests for it.
- SGToken contract.
- ERC20 token for tests.

### Changed

- SingularDTVFund contract now can deposit and withdraw rewards in ERC20 tokens. Tokens must be allowed by owner to 