pragma solidity ^0.4.24;
import './DateTime.sol';

contract subscription is DateTme{

  address internal owner;
  DateTime internal dateTime;
  bool subContractActive;

  function deposit() public payable {
    owner = msg.sender;
  }

  struct DateNow {
    uint16 currentYear = getYear(now);
    uint8 currentMonth = getMonth(now);
    uint8 currentDay = getDay(now);
  }

  struct PaymentDate {
    uint16 nextYear = DateNow.currentYear++;
    uint8 nextMonth = 
    if(currentMonth==12){
      nextMonth = 1;
    }
    else{
    DateNow.currentMonth++
    };
    uint8 nextDay;
  }

  struct SubscriptionInfo{
    address[] merchant;
    uint[] price;
    uint[] periodType;
    bytes32[] currentDate;
    bytes32[] nextPaymentDate
  }

  uint subID;
  mapping (uint => SubscriptionInfo) Subscriptions;

  function createSubscription(address _merchant, uint _price, uint8 _periodType) public returns (bool) {
    var subscription = Subscriptions[subID++];
    Subscriptions.merchant = _merchant;
    Subscriptions.price = _price;
    Subscriptions.currentDate = DateNow.currentYear + DateNow.currentMonth + DateNow.currentDay;
    Subscriptions.periodType = _periodType;

    if(Subscriptions.periodType == 1){
      PaymentDate.nextYear;
    }

    else{
      if(Subscriptions.periodType == 2){
        PaymentDate.nextMonth;
      }
    }

    return true;
  }

  function getBalance() returns (uint) {
    uint balance = owner.balance();
    return balance;
  }

  function subscriptionPayment() {
    require((this.balance) > Subscriptions.price)
    SubscriptionInfo.merchant.transfer(SubscriptionInfo.price);
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
