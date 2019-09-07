class User{
    private int age;
    private string name;

}

public void setNmae(String newName){
    this.name = newName;

}

public void setAge(int newAge){
    // validation 
    if(newAge>18)
    this.age = newAge;
}