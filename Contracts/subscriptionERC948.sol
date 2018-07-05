pragma solidity ^0.4.24;
import './DateTime.sol';

contract subscription is DateTme{

  address internal owner;
  DateTime internal dateTime;

  function deposit() public payable {
    owner = msg.sender;
  }

  struct SubscriptionInfo{
    address merchant;
    uint8 periodType;
    uint price;
    bytes32 currentDate;
    bytes32 nextPaymentDate;
    uint16 currentYear;
    uint8 currentMonth;
    uint8 currentDay;
    uint16 nextYear;
    uint8 nextMonth;
    uint8 nextDay;
  }

  uint subID;
  mapping (uint => SubscriptionInfo) Subscriptions;

  function () {
    uint16 currentYear = getYear(now);
    uint8 currentMonth = getMonth(now);
    uint8 currentDay = getDay(now);
    uint16 nextYear = DateNow.currentYear++;
    uint8 nextMonth = if(currentMonth==12){
      nextMonth = 1;}
                      else{DateNow.currentMonth++};
  }

  function createSubscription(address _merchant, uint _price, uint8 _periodType) public returns (bool) {
    var subscription = Subscriptions[subID++];
    Subscriptions.merchant = _merchant;
    Subscriptions.price = _price;
    Subscriptions.currentDate = DateNow.currentYear + DateNow.currentMonth + DateNow.currentDay;
    Subscriptions.periodType = _periodType;

    if(Subscriptions.periodType == 1){
      PaymentDate.nextYear;
      for(){
         if(PaymentDate.nextYear == now ){
         Subscriptions.merchant.send(Subscriptions)
         }
      }
    }

    else{
      if(Subscriptions.periodType == 2){
        PaymentDate.nextMonth;
      }
    }

    if (this.balance < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		Transfer(msg.sender, receiver, amount);
    return true;
  }

  function sendPayment(address receiver, uint amount) returns(bool sufficient) {
		if (this.balance < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		Transfer(msg.sender, receiver, amount);
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
      if(_fullWithdrawal==true){
        owner.transfer(this.balance);
      }
      owner.transfer(_witdrawalAmount);
      return true;
  }

  function cancelSubscription(uint _subID) public returns (bool) {
    require(owner == msg.sender);
    msg.sender.send(balance);
  }
}
