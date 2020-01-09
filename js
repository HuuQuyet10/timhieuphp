// const a = 1;
// let b = 2;
// b = 3;
// console.log(b);
// object
        // let a = {
        //     name: 'quyet',
        //     age: 18,
        // }
        // let c = {
        //     school: 'bach khoa',
        // }
        // a = {...a,...c};
        // a = {...a,school : 'gcgsdc'}
        // console.log(a);
// console.log(typeof a.name);
// console.log(typeof a.age);
// console.log(1 + 2); // '' vừa là cộng và nối chuỗi
// let b = [
//     {name: 'quyet',
//     age: 13 },
//     {name: 'dai',
//     age: 23},
//     {name: 'trung',
// age: 23},
// ]

// let thuba =  {
//     name :'hieu',
//     age : 1
// }

// b = [...b,thuba]
// b = [thuba,...b];
// console.log(b);
// a.name = 'dai';
// a.age = 29;
// b[0].name = 'quye2';
// console.log(b[0].name);
// console.log(a.age);
// console.log(a.name)
// b[1].age = 30;
// console.log(b[1].age);
// console.log(b[1].name);

// xoa phan tu trong array
// c = b.filter(e=>e.age==23) // muốn tìm kiếm thì thay dấu ==, !==
// console.log(c)

// k==================

let dongvat = [
    {
        name: 'cho',
        age: 1
    },
    {
        name: 'meo',
        age: 1
    },
    {
        name: 'khi',
        age: 2
    },
    {
        name: 'lon',
        age: 3
    },
    {
        name: 'cho con',
        age: 10
    }
]

// 1, thay đổi tuổi chó con bằng 3
dongvat[4].age = 3;  // tên dãy array là dongvat, [4] ở đây là vị trí phần tử trong dãy array bắt đầu từ số 0 cho đến số n, age = 3 ở đây là số tuổi mới cần được thay thế cho giá trị age là 3 thay vì là 10
console.log(dongvat) // sau đó in toàn bộ dãy đó ra
// 2, tìm tất cả các con vật có tuổi bẳng 1 sau đó gán vào mảng A
timkiem = dongvat.filter(e=>e.age==1); //tạo biến có tên timkiem giá trị bằng dongvat ở đây là tên dãy array, .filter là lệnh tìm kiếm và lọc cũng như xóa bỏ, e=>e.age==1 ,e ở đây là 1 lệnh lớn nhất nó thể đi qua tất cả các phần tử khác để chọn và tìm phần tử mình mong muốn trong mảng, ở đây là age có giá trị là bằng 1
console.log(timkiem); // sau đó in ra tìm kiếm


// 3, loại bỏ con vật có tuổi bằng 2
deletedong = dongvat.filter(e=>e.age!==2); // tạo biến có tên là deletedong bằng dongvat ở đây là tên dãy array, .filter là một lệnh tìm kiếm và lọc cũng như xóa bỏ theo yêu cầu( như đã nói ở câu trên) chú ý ở đây là dấu == là có giá trị =, dấu !== là có giá trị lớn hơn hoắc khác giá trị
console.log(deletedong); // sau đó in lệnh deletedong để thực thi câu lệnh


// 4, tính tổng số tuổi con vật trong mảng dongvat
 console.log(dongvat[0].age + dongvat[1].age + dongvat[2].age + dongvat[3].age);
  // ở đây là console.log chọn ra tuổi của từng phần tử trong mảng thông qua lệnh dongvat[vị_trí_của_phần_tử].age ,age ở đây là tuổi sau đó chúng sẽ tự cộng lại với nhau

  // 5, kiểm tra tuổi của con vật thứ 3, và con vật thứ 2, xem có bằng nhau hay ko
sosanh = dongvat[2].age == dongvat[1].age; // tạo biến có tên là sosanh có giá trị là con vật thứ 2 và thứ 3 trong mảng có bằng tuổi nhau ko, nếu có sẽ trả về true, còn nếu ko sẽ trả về là false ở đây là sai thì sẽ là false
console.log(sosanh); //sau đó console biến sosanh để thực thi câu lệnh
// tìm hiểu thêm về toán tử tại đây https://developer.mozilla.org/vi/docs/Web/JavaScript/Guide/Expressions_and_Operators#To%C3%A1n_t%E1%BB%AD_so_s%C3%A1nh
