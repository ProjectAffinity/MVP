pragma solidity ^0.4.24;
import './DateTime.sol';

contract subscription{

  address internal owner;
  DateTime internal dateTime;

  function getOwner() {
        owner = msg.sender;
    }
  modifier onlyOwner() {
        require(msg.sender == owner);
    }

  struct Subscription{
    address[] merchant;
    uint[] price;
    uint[] startTime = timestamp.now;
    mapping (address => Subscription) Subscriptions;
  }


  function getAddresses(address _merchant){
     Subscription[merchant] = _merchant;
  }


  function subscriptionPeriod(uint _periodType, uint16 year, uint8 month, uint8 day) returns string{
      if (_periodType==1){
          year.getYear();
          month.getMonth();
          day.getDay();
          for(){

          }
        }
  }

  function withdrawl(bool _fullWithdrawal, uint _withdrawlAmount) external returns (bool) {
      fullWithdrawal = _fullWithdrawal;
      if(fullBalance==true){
        owner.transfer(this.balance);
      }
      withdrawalAmount = _withdrawlAmount;
      owner.transfer(witdrawalAmount);
      return true;
  }

  }
