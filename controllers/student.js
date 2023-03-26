
const mongoClint=require('../database/connection')
const studentEnroll=async (req,res)=>{
    const studentData=req.body;
    try{
        const result=await mongoClint.insertToDB(studentData)
        console.log("the result of databse operation =>",result)
        // return res.status(200).send({message:studentData})
        return res.status(200).send(result)
    } catch (error){
        console.log("something went to error while perporming db operation")
        return res.status(500).send({message:"something went to error while perporming db operation"})
    }
}

const showStudent=async (req,res)=>{
    const queryParms=req.query;
    console.log(queryParms);

    try{
        const result=await mongoClint.findDB(queryParms);
        console.log("the result of the database operation =>",result)
        return res.status(200).send(result)
    }catch (error){
        console.log("something went wrong")
        return res.status(500).send({message:"something wrong in find"})
    }
}

const updateStudent=async (req,res)=>{
    const updateData=req.body
    // const updateQuery={"class":{"$set":"BBA"}}
    const updateFilter=updateData.Filter
    const updateValue=updateData.value
    const value={$set:updateValue}

    try{
        const result=await mongoClint.updateDB(updateFilter,value);
        return res.status(200).send(result)
    }catch (error){
        return res.status(500).send({message:"Something wrong in update"})
    }

}

const deleteStudent=async (req,res)=>{
    const deleteQuery={name:"gayathri"}

    try{
        const result=await mongoClint.deleteDB(deleteQuery);
        return res.status(200).send(result)
    }catch(error){
        res.status(500).send({message:"something went wrong in delete"})
    }
}


module.exports={
    studentEnroll,showStudent,updateStudent,deleteStudent
}