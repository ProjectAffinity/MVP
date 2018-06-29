pragma solidity ^0.4.24;
import './DateTime.sol';

contract subscription{

  address internal owner;
  DateTime internal dateTime;



  struct time {
    uint16 year = _year.getYear();
    uint8 month = _month.getMonth();
    uint8 day = _day.getDay();
  }

  function payment() public payable {
    owner = msg.sender;
  }

  modifier onlyOwner() external{
    require(msg.sender == owner);
  }

  struct SubscriptionInfo{
    address[] merchant;
    uint[] price;
    uint[] recurringPeriod;
    uint[] startTime = blocktimestamp;
    bool[] subActive;
  }

  uint subID;
  mapping (uint => SubscriptionInfo) Subscriptions;

  function getSubInfo(address _merchant, uint _price, bool _active, uint8 _periodType) public returns (bool) {
    var subscription = Subscriptions[subID++];
    Subscriptions.merchant = _merchant;
    Subscriptions.price = _price;
    Subscriptions.startTime = block.timestamp;
    Subscriptions.subActive = _active;

    if (_periodType==1){
      for()
    }

    if (_periodType==2){
      month.getMonth();
      for(i=)
    }
    return true;
  }




  function getBalance() returns (uint) {
    uint balance = owner.balance();
    return balance;
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

  function cancelSubscription(address _cancelledAddress) public returns (bool) {
    require()
  }
}
