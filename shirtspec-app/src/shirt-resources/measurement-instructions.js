export default [
    {   page: 0,
        id: 'customer-name',
        name: 'Welcome!',
        image: '/pics/welcome.png',
        content: 'Welcome to ShirtSpec, a measurement companion app for Individualized Shirts retail partners. Please enter your customer\'s name and let\'s get measuring!'

    },
    {   page: 1,   
        id: 'chest',
        name: 'Chest',
        image: '/pics/chest.png',
        content: 'Individualized Shirts makes custom shirt patterns in size 30 to 70. Measure your customer\'s chest at the fullest part. Have him put on a Try-On shirt identical to his chest measurement. For a contemporary fit, size down one pattern.'
    },
    {   page: 2,
        id: 'shirt-waist',
        name: 'Shirt Waist',
        image: '/pics/waist.png',
        content: 'Measure the shirt waist at the fullest part of the customer\'s stomach (think belly button), not necessarily where he wears his pants. On an average man, this is between the fifth and sixth button to the nearest inch.'
    },
    {   page: 3,
        id: 'yoke',
        name: 'Yoke',
        image: '/pics/yoke.png',
        content: 'Measure from the outside seam where the yoke joins the sleeve, across the shoulders and under the collar to the opposite side. The yoke should sit squarely on the edge of the shoulders. Adjust the yoke by 1/2" increments to the customer\'s comfort.'
    },
    {   page: 4,
        id: 'shaping',
        name: 'Shaping',
        image: '/pics/shaping.png',
        content: 'Shaping is the drop of fabric from the chest to the shirt waist. The default shaping on a shirt pattern is -4. Gather extra fabric equally in each hand at the shirt waist and factor this into your shaping measurement. For example, pinching an inch in each hand (1" x 2) would result in less 6" from the shaping, or -6.'
    },
    {   page: 5,
        id: 'left-sleeve',
        name: 'Left Sleeve',
        image: '/pics/lsleeve.png',
        content: 'The sleeve is composed of three parts: Half of the actual yoke, the actual sleeve from yoke seam to where the cuff is attached, and the cuff itself. You should already have taken a yoke measurement by now, so find that measurement on the "Yoke" section of the calibrated tape, line the number up to the outside seam of the yoke on the customer\'s shirt, and measure to the pinky knuckle of the customer\'s closed fist.'
    },
    {   page: 6,
        id: 'right-sleeve',
        name: 'Right Sleeve',
        image: '/pics/rsleeve.png',
        content: 'Again, the sleeve is calculated from half of the yoke (shoulder) measurement, plus the entire sleeve length inclusive of cuff. To find this figure manually, measure from the end of the yoke (shoulder) to the customer\'s closed fist\'s pinky knuckle and subtract 1 1/2". Add this to the half yoke measurement, or alternatively (AKA less accurately!) measure from the midpoint of the yoke across the shoulders to the pinky knuckle and subtract 1 1/2".'
    },
    {   page: 7,
        id: 'left-cuff',
        name: 'Left Cuff',
        image: '/pics/lcuff.png',
        content: 'The cuff measurement is calculated from the on-skin measurement over the wrist bone +2 3/4", rounded to the 1/4". Or... Use your calibrated tape! The math is done for you, just find the "Yoke" section. Don\'t forget to ask the customer if he plans on wearing a watch and accommodate accordingly.' 
    },
    {   page: 8,
        id: 'right-cuff',
        name: 'Right Cuff',
        image: '/pics/rcuff.png',
        content: 'Ask the customer to make a fist when measuring the wrist. Always measure both wrists--don\'t assume symmetry. Again, verify if a watch will be worn on the current wrist, and if so, add up to a 1/2" for larger faced watches but 1/4" by dafault.'
    },
    {   page: 9,
        id: 'tail',
        name: 'Tail',
        image: '/pics/tail.png',
        content: 'The tail measurement is the vertical measurement of the front panel from the point where the yoke, front panel, and collar band join straight down to the bottom of the shirt (standard length is 32"). Always ask if the customer intends to wear his shirt tucked in and adjust accordingly.'
    },
    {   page: 10,
        id: 'collar',
        name: 'Collar',
        image: '/pics/collar.png',
        content: 'To determine collar size, place the tape at the back of the neck and bring it around to a point under the Adam\'s Apple. This should be a smooth or "skin" measurement with no slack allowed. Add 1/2" to this measurement for comfort and place the corresponding Try-On collar on the customer. Remember, the Try-On collar is the finished size after shrinkage, so it\'s a safe bet if the customer likes the fit!'
    },
    {   page: 11,
        id: 'shoulder-line',
        name: 'Shoulder Line',
        image: '/pics/shoulderline1.png',
        content: 'The shoulder line is determined by assessing the front panel of the shirt of the upper chest. Square shoulders can be described as a pull from the third button out towards the shoulder, slope shoulders as a pull from under the arms toward the collar, extreme slope as a more exaggerated slope shoulder (not to be used on initial orders), and drop right or left indicates that only one shoulder is sloped. Do not discuss the shoulder line with your customer!'
    },
]