//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Cà phê đen đá',
            img: './assets/img/products/black-ice-coffee.png',
            category: 'Cà phê',
            price: 22000,
            desc: ''
        },
        {
            id: 2,
            status: 1, 
            title: 'Cà phê đen nóng',
            img: './assets/img/products/black-coffee.png',
            category: 'Cà phê',
            price: 22000,
            desc: ''
        },
        {
            id: 3,
            status: 1, 
            title: 'Cà phê sữa đá',
            img: './assets/img/products/milk-ice-coffee.png',
            category: 'Cà phê',
            price: 24000,
            desc: ''
        },
        {
            id: 4,
            status: 1, 
            title: 'Cà phê sữa nóng',
            img: './assets/img/products/milk-coffee.png',
            category: 'Cà phê',
            price: 24000,
            desc: ''
        },
        {
            id: 5,
            status: 1, 
            title: 'Cà phê trứng đá',
            img: './assets/img/products/ice-egg-coffee.png',
            category: 'Cà phê',
            price: 28000,
            desc: ''
        },

        {
            id: 6,
            status: 1, 
            title: 'Cà phê trứng nóng',
            img: './assets/img/products/egg-coffee.png',
            category: 'Cà phê',
            price: 28000,
            desc: ''
        },

        {
            id: 7,
            status: 1, 
            title: 'Espresso',
            category: 'Cà phê',
            img: './assets/img/products/espresso.png',
            price: 20000,
            desc: ''
        },

        {
            id: 8,
            status: 1, 
            title: 'Americano',
            img: './assets/img/products/americano.png',
            category: 'Cà phê',
            price: 20000,
            desc: ''
        },

        {
            id: 9,
            status: 1, 
            title: 'Cappucino',
            category: "Cà phê",
            img: './assets/img/products/cappuccino.png',
            price: 26000,
            desc: '',
        },
        {
            id: 10,
            status: 1, 
            title: 'Latte',
            category: "Cà phê",
            img: './assets/img/products/latte.png',
            price: 25000,
            desc: '',
        },
        {
            id: 11,
            status: 1, 
            title: 'Trà đào',
            category: 'Trà',
            img: './assets/img/products/tra-dao.png',
            price: 24000,
            desc: ''
        },
        {
            id: 12,
            status: 1, 
            title: 'Trà vải',
            img: './assets/img/products/tra-vai.png',
            category: 'Trà',
            price: 24000,
            desc: ''
        },
        {
            id: 13,
            status: 1, 
            title: 'Trà ổi hồng',
            img: './assets/img/products/tra-oi-hong.png',
            category: 'Trà',
            price: 24000,
            desc: ''
        },
        {
            id: 14,
            status: 1, 
            title: 'Trà Atiso',
            img: './assets/img/products/tra-atiso.png',
            category: 'Trà',
            price: 28000,
            desc: ''
        },
        {
            id: 15,
            status: 1, 
            title: 'Trà đào cam sả',
            img: './assets/img/products/tra-dao-cam-sa.png',
            category: 'Trà',
            price: 24000,
            desc: ''
        },
        {
            id: 16,
            status: 1, 
            title: 'Trà Hibiscus',
            img: './assets/img/products/tra-hibiscus.png',
            category: 'Trà',
            price: 24000,
            desc: ''
        },
        {
            id: 17,
            status: 1, 
            title: 'Sinh tố dâu',
            img: './assets/img/products/sinh-to-dau.png',
            category: 'Sinh tố',
            price: 22000,
            desc: ''
        },
        {
            id: 18,
            status: 1, 
            title: 'Sinh tố bơ',
            img: './assets/img/products/sinh-to-bo.png',
            category: 'Sinh tố',
            price: 22000,
            desc: ''
        },
        {
            id: 19,
            status: 1, 
            title: 'Sinh tố xoài',
            img: './assets/img/products/sinh-to-xoai.png',
            category: 'Sinh tố',
            price: 18000,
            desc: ''
        },
        {
            id: 20,
            status: 1, 
            title: 'Sinh tố mãng cầu',
            category: 'Sinh tố',
            img: './assets/img/products/sinh-to-mang-cau.png',
            price: 22000,
            desc: ''
        },
        {
            id: 21,
            status: 1, 
            title: 'Nước ép dứa (thơm)',
            category: 'Nước ép',
            img: './assets/img/products/nuoc-ep-thom.png',
            price: 22000,
            desc: ''
        },
        {
            id: 22,
            status: 1, 
            title: 'Nước ép cam',
            category: 'Nước ép',
            img: './assets/img/products/nuoc-ep-cam.png',
            price: 22000,
            desc: ''
        },

        {
            id: 23,
            status: 1, 
            title: 'Nước ép dưa hấu',
            img: './assets/img/products/nuoc_ep_dua_hau.png',
            category: 'Nước ép',
            price: 22000,
            desc: ''
        },

        {
            id: 24,
            status: 1, 
            title: 'Nước ép chanh dây',
            img: './assets/img/products/nuoc-ep-chanh-day.png',
            category: 'Nước ép',
            price: 22000,
            desc: ''
        },
        {
            id: 25,
            status: 1, 
            title: 'Nước ép bưởi',
            category: 'Nước ép',
            img: './assets/img/products/nuoc-ep-buoi.png',
            price: 22000,
            desc: ''
        },

        {
            id: 26,
            status: 1, 
            title: 'Coca Cola',
            category: 'Nước giải khát',
            img: './assets/img/products/coca-cola.png',
            price: 12000,
            desc: ''
        },

        {
            id: 27,
            status: 1, 
            title: 'Pepsi',
            category: 'Nước giải khát',
            img: './assets/img/products/pepsi.png',
            price: 12000,
            desc: ''
        },
        {
            id: 28,
            status: 1, 
            title: '7-Up',
            category: 'Nước giải khát',
            img: './assets/img/products/7-up.png',
            price: 12000,
            desc: ''
        },
        {
            id: 29,
            status: 1, 
            title: 'Red Bull',
            category: 'Nước giải khát',
            img: './assets/img/products/red-bull.png',
            price: 12000,
            desc: ''
        },
        {
            id: 30,
            status: 1, 
            title: 'Revive',
            category: 'Nước giải khát',
            img: './assets/img/products/revive.png',
            price: 12000,
            desc: ''
        },
        {
            id: 31,
            status: 1, 
            title: 'Soda dâu',
            category: 'Khác',
            img: './assets/img/products/soda-dau.png',
            price: 30000,
            desc: ''
        },
        {
            id: 32,
            status: 1, 
            title: 'Soda chanh',
            category: 'Khác',
            img: './assets/img/products/soda-chanh.png',
            price: 30000,
            desc: ''
        },
        {
            id: 33,
            status: 1, 
            title: 'Cacao nóng',
            category: 'Khác',
            img: './assets/img/products/cacao-nong.png',
            price: 29000,
            desc: ''
        },
        {
            id: 34,
            status: 1, 
            title: 'Cacao đá',
            category: 'Khác',
            img: './assets/img/products/cacao-da.png',
            price: 29000,
            desc: ''
        },
        {
            id: 35,
            status: 1, 
            title: 'Sữa chua việt quất',
            category: 'Khác',
            img: './assets/img/products/sua-chua-viet-quat.png',
            price: 32000,
            desc: ''
        }]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Huỳnh Quốc Hưng",
            phone: "hqh7",
            password: "123456",
            address: '',
            email: 'hungqh7@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Huỳnh Quốc Hưng",
            phone: "0908314329",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType:44444444444
        })
        accounts.push({
            fullname: "Jason",
            phone: "9999999999",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 0
        })
        accounts.push({
            fullname: "Hồ Ngọc Đăng Khoa",
            phone: "0707945180",
            password: "123456",
            address: '',
            email: 'hongocdangkhoa2010@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();