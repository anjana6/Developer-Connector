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
    check('skills','Skills is requird').not().isEmpty()]
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
                await Profile.findOneAndUpdate(
                {user: req.user.id},{$set: profileFileds},
                {new: true}
            
            );
            return res.json(profile);
            }

            profile = new Profile(profileFileds);

            await Profile.save();
            res.json(profile);
        }catch(err){
            console.error(err.message);
            res.status(500).send('Server Error')
        }

        res.send('Hello');

});







module.exports = router;