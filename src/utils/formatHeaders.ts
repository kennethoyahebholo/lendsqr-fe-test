const formatHeader = (key: string) => {
  switch (key) {
  case 'firstName':
    return 'First name';
  case 'lastName':
    return 'Last name';
  case 'amount':
    return 'Amount';
  case 'createdAt':
    return 'Date Created';
  case 'accountNumber':
    return 'Account Number';
  case 'userName':
    return 'Username';
  case 'status':
    return 'Status';
  case 'statusName':
    return 'Status';
  case 'phone':
    return 'Phone Number';
  case 'address':
    return 'Address';
  case 'email':
    return 'Email address';
  case 'userRole':
    return 'Role';
  case 'logo':
    return 'Merchant Logo';
  case 'banner':
    return 'Banner';
  case 'imageUrl':
    return 'Profile Image';
  case 'primaryImage':
    return 'Shop Image';
  case 'brandName':
    return 'Brand';
  case 'categoryName':
    return 'Category';
  case 'category':
    return 'Category';
  case 'storeName':
    return 'Store';
  case 'receiverName':
    return 'Receiver name';
  case 'receiverPhone':
    return 'Receiver phone';
  case 'total':
    return 'Total price';
  case 'isApproved':
    return 'Status';
  case 'orderNumber':
    return 'Order no';
  case 'productNumber':
    return 'Product no';
  case 'outstandingAmount':
    return 'Outstanding';
  case 'Actions':
    return ' ';
  case 'storeId':
    return 'Store ID';
  case 'shortDescription':
    return 'Short Description';
  case 'description':
    return 'Main Description';
  case 'weight':
    return 'Weight';
  case 'phoneNumber':
    return 'Phone Number';
  case 'emailAddress':
    return 'Email Address';
  case 'paymentMethod':
    return 'Payment Method';
  case 'deliveryMethod':
    return 'Delivery method';
  case 'deliveryDate':
    return 'Delivery Date';
  case 'deliveryOptions':
    return 'Delivery Options';
  case 'pickUpLocation':
    return 'Pickup Location';
  case 'orderDate':
    return 'Order Date';
  case 'accountName':
    return 'Account Name';
  case 'swiftCode':
    return 'Swift code';
  case 'totalInterestEarned':
    return 'Total Interest';
  case 'totalAmount':
    return 'Total Interest';
  default:
    return key;
  }
};

export default formatHeader;

// By pass login
// see transaction of other device
