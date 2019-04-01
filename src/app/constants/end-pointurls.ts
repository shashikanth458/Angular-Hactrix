const prefix='http://lvh.me:8080',endPointUrl=()=>(
    {
        'getUser':prefix+'/api/user/$userId',
        'productsList':prefix+'/api/product',
        'productInfo':prefix+'/api/product/description/$id',
        'addTocart':prefix+'/api/cart/',
        'getCart':prefix+'/api/cart/$userId',
        'checkoutOrder':prefix+'/api/order',
        'submitLoan':prefix+'/loans/add',
        'getUserDetails':prefix+'/employees/$userId',
        'getLoanDetails':prefix+'/loans/fetch'

    }
)

export default endPointUrl();