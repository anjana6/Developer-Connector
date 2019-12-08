const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check,validationResult} = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

router.get('/me',auth,async(req,res) => {
    try {
        const profile = await Profile.findOne({user: req.user.id}).populate('user',['name','avatar']);

        if(!profile){
            return res.status(400).json({msg:'There is no profile for this user'});        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server Error');
    }
});

router.post('/',[auth,[
    check('status','Status is required').not().isEmpty(),
    check('skills','Skills is requird').not().isEmpty()
]
],async(req,res) => {
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({errors:errors.array()})
     }

     const {company,website,location,bio,status,githubusername,skills,youtube,facebook,twitter,instagram,linkedin} = req.body;

        const profileFileds = {};
        profileFileds.user = req.user.id;
        if(company) profileFileds.company = company;
        if(website) profileFileds.website = website;
        if(location) profileFileds.location = location;
        if(bio) profileFileds.bio = bio;
        if(status) profileFileds.status = status;
        if(githubusername) profileFileds.githubusername = githubusername;
        if(skills){
            profileFileds.skills = skills.split(',').map(skill => skill.trim());
        }

        profileFileds.social = {};

        if(youtube) profileFileds.social.youtube = youtube;
        if(twitter) profileFileds.social.twitter = twitter;
        if(facebook) profileFileds.social.facebook = facebook;
        if(linkedin) profileFileds.social.linkedin = linkedin;
        if(instagram) profileFileds.social.instagram = instagram;

        try {
            let profile = await Profile.findOne({user: req.user.id});
 
            if(profile) { 
                profile = await Profile.findOneAndUpdate(
                {user: req.user.id},{$set: profileFileds},{new: true}
            );
            return res.json(profile); 
            }

            profile = new Profile(profileFileds);

            await profile.save();
            res.json(profile);
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server Error')
        }

        

 });

router.get('/',async (req,res )=> {
    try {
        const profiles = await Profile.find().populate('user',['name','avatar']);
        res.json(profiles);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
        
    }
});

router.get('/user/:user_id',async(req,res)=>{
    try {
        const profile = await Profile.findOne({user:req.params.user_id}).populate('user',['name','avatar']);

        if(!profile){
            return res.status(400).json({msg:'There is no proifle for the user'});
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);

        if(err.kind == 'ObjectId'){
            return res.status(400).json({msg:'There is no proifle for the user'});
        }
        res.status(500).send('server Eror');
        
    }
});

router.delete('/',auth,async(req,res)=>{
    try {
        await Profile.findOneAndRemove({user: req.user.id});

        await User.findOneAndRemove({_id: req.user.id});

        res.json({msg: 'User deleted'})
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
        
    }

});

router.put('/experience',[auth,[
    check('title','Title is required').not().isEmpty(),
    check('company','Company is required').not().isEmpty(),
    check('from','From is required').not().isEmpty()
]],async(req,res) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }

    const {title,company,location,from,to,current,description} = req.body; 

    const newExp = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    }
    try {
        const profile = await Profile.findOne({user: req.user.id});

        profile.experience.unshift(newExp);

        await profile.save();

        res.json(profile); 
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
        
    }


})








module.exports = router;