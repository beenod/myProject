
const imageUpload = async(req,res)=>{
console.log(req.file)
res.send('upload sucessfully')
}

export default imageUpload