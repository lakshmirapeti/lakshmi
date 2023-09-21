
            class University{
               constructor(data){
                  this.Uname = data.university.name;
                  this.Ucity = data.university.city;
                  this.Ustate =  data.university.state;
               }
            }
            class College extends University{
             constructor(data){
                super(data);
               this.Cname = data.college.name;
               this.Cowner = data.college.owner;
               this.Cnumber = data.college.number;
             }
            }
            class Student extends College{
             constructor(data){
                super(data);
                this.Sname = data.student_det.name;
                this.Semail = data.student_det.email;
                this.Snumber = data.student_det.number;
                this.Sage = data.student_det.age;
                document.querySelector("#Uname").innerHTML = this.Uname; 
                document.querySelector("#Ucity").innerHTML = this.Ucity;         
                document.querySelector("#Ustate").innerHTML = this.Ustate; 
                document.querySelector("#Cname").innerHTML = this.Cname; 
                document.querySelector("#Cowner").innerHTML = this.Cowner;         
                document.querySelector("#Cnumber").innerHTML = this.Cnumber; 
                document.querySelector("#Sname").innerHTML = this.Sname; 
                document.querySelector("#Semail").innerHTML = this.Semail;         
                document.querySelector("#Snumber").innerHTML = this.Snumber;                
             }             
            }
            var data = 
                {
                    student_det:{
                    name:"jyoti Solanki",
                    number: "9691515185",
                    email: "jyoti@gmail.com"
                },
                university:{
                   name:"RGPV",
                   city:"Bhopal",
                   state: "Mp"
                },
                college:{
                   name:"JIT borawah",
                   owner:"sugandhi Sir",
                   number: "867566877"
                },
              };
              function loasDetails(){
            
                obj = new Student(data);
              }
           
        