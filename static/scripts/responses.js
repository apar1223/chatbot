function getBotResponse(input) {
   

   if(input==1){
    
       return "To know about eligibility press e1, for documents required press d1."
   }
   else if(input=="e1"){
       return "Eligibility Criteria : <br/>1) Gujarat resident are eligible <br/>2) Age of the women should be below 35 years <br/>3) When there is only one daughter, the age of the daughter should be more than one year <br/>4) Social Defence Certificate is given to families who adopt family planning after having one or two daughters or and have no son."
       

   }
   else if(input=="d1"){
       return "Identity proof: Aadhar card, Voter ID <br/>3) Women’s age proof: birth certificate etc.<br/>4) BPL Ration card <br/>5) Passport size photograph <br/>6) Bank passbook copy <br/>7) Bank details e.g. IFSC code, MICR code, Account no"
   }


   else if(input=="a1"){
       return "address for <br/> Ahmedabad-press ad1 <br/> Amreli-press ad2 <br/> Anand-press ad3 <br/> Rajkot-press ad4 <br/> Vadodra - press ad5 <br/> Surat- press ad6 <br/>Bharuch - press ad7<br/>Bhavnagar - press ad8" 
   }


   //addresses 
   else if(input=="ad1"){
       return "address for Ahmedabad is : Office of the Collector & District Magistrate <br/>Near Subhash Bridge Circle, <br/>R.T.O Ashram Rd, Hridaya Kunj, <br/>Old Wadaj, Ahmedabad,<br/>Gujarat - 380027"
   }
   else if(input=="ad2"){
       return "Address for Amreli: JAN SUVIDHA KENDRA, SHOP-9, GIRIRAJ APARTMENT, HATHSANI ROAD, SAVARKUNDLA, AMRELI, GUJARAT-364515"
   }
   else if(input=="ad3"){
       return "Address for Anand:  Borsad Chokdi Road, Jitodia, Anand, Gujarat"
   }
   else if(input=="ad4"){
       return "Address for Rajkot: Nandanavan Society, Panchayat Nagar, Rajkot, Gujarat 360005"
   }
   else if(input=="ad5"){
       return "Address for Vadodra: Nandanvan Complex, Susen - Tarsali Ring Road, Nandanvan Society, Tarsali, Near Ganesh Aluminium, Vadodara, Gujarat 390009"
   }
   else if(input=="ad6"){
       return "Address for Surat: District Collector Office New Jilla Seva Sadan, Block B, 5th Floor Athwalines, Surat, Gujarat 395001"
   }
   else if(input=="ad7"){
       return "Address for Bharuch: Shaktinath, Railway Colony, Bharuch, Gujarat 392001"
   }
   else if(input=="ad8"){
       return "Address for Bhavnagar: Shilpi Nagar, Bhavnagar, Gujarat 364001"
   }




   else if(input==2){
       return "To know about eligibility press e2, for documents required press d2." 
   }
   else if(input=="e2"){
       return "Eligibility Criteria : <br/>1)This scheme is for the first two girl children of the family <br/>2) Applicant must belong to Gujarat state <br/>3) Applicant must have a bank account <br/>4) The annual income of the applicant’s family should not be more than Rs. 2 Lakh"
   }
   else if(input=="d2"){
       return "Documents Required : <br/>1) Domicile Certificate <br/> 2)Birth Certificate <br/>3) Income Certificate (Upto 2 Lakh Rupee Annual) <br/> 4)Parents Identity Proof <br/> 5)Bank Account Passbook <br/> 6)Photograph"
   }
   
   else if(input==3){
       return "To know about eligibility press e3, for documents required press d3."
   }
   else if(input=="e3"){
       return "Eligibility criteria : <br/>1) Candidate should be an Indian National <br/>2) Girl must be from SC, ST or OBC category <br/> 3)Girl child must be below 8th grade <br/> 4)Girl must be from Below Poverty Line."
   }
   else if(input=="d3"){
       return "Documents Required : <br/>1)Caste Certificate <br/>2)Birth Certificate <br/>3)Aadhar Card (Girl’s, Father’s) <br/> 4)BPL card <br/>5)Income Certificate <br/>6)Previous Years education pass mark sheet"
   }
   
   else if(input==4){
       return "To know about eligibility press e4, for documents required press d4."
   }
   else if(input=="e4"){
       return "Eligibility Criteria:<br/> Women belonging to BPL family or any women of the SC/ST community irrespective of their income."
   }
   else if(input=="d4"){
       return "Documents Required:<br/>1) Aadhaar <br/>2) Bank Account Passbook<br/>3)Address proof <br/>4)Domicile certificate <br/>5)Ration card copy <br/> 6)Janani Suraksha Card <br/> 7)Mobile Number<br/> 8)Delivery certificate from the Hospital <br/>9)Passport size Photo"
   }
   
   else if(input==5){
       return "To know about eligibility press e5, for documents required press d5."
       
   }
   else if(input=="e5"){
       return "Eligibility Criteria: <br/> All pregnant women including normal deliveries and caesarean operations and sick newborn (up to 30 days after birth) in Government health institutions in both rural & urban areas."
   }
   else if(input=="d5"){
       return "Documents Required: <br/>1)BPL ration card (if available) <br/>2)Aadhar card <br/>3)Permanent residence proof e.g. voter ID"
   }
   
   else if(input==6){
       return "To know about eligibility press e6, for documents required press d6."
   }
   else if(input=="e6"){
       return "Eligibilty Criteria: <br/> Women belonging to Scheduled Caste or Scheduled Tribe and residence of Gujarat are eligible under this scheme."
   }
   else if(input=="d6"){
       return "Documents Required: <br/>1)Caste certificate <br/> 2)Residence proof <br/>3)Identity proof<br/> 4)BPL Ration card(if available) <br/> 5)Passport size photograph."
   }
   
   else if(input==7){
       return "To know about eligibility press e7, for documents required press d7."
   }
   else if(input=="e7"){
       return "Eligibility Criteria: <br/>1)Women are eligible for the Yojna <br/>2)Women must be from below poverty line <br/>3)Women must be from rural area."
   }
   else if(input=="d7"){
       return "Documents Required : <br/>1)Caste Certificate <br/>2)Birth Certificate <br/>3)Aadhar Card <br/>4)BPL card <br/>5)Income Certificate <br/>6)Ration Card"
   }
   
   else if(input==8){
       return "To know about eligibility press e8, for documents required press d8."
   }
   else if(input=="e8"){
        return "Eligibility Criteria: <br/>The women who belong to BPL (Below Poverty Line ) and APL (Above Poverty Line) and who are pregnant are eligible to get benefits of Chiranjeevi Yojana."
   }
   else if(input=="d8"){
        return "Documents Required: <br/>1)The women required to have BPL or APL ration card <br/>2)Tribal certificate <br/> 3)Authorization by local recognized authority <br/>4)Application form is available with hospital itself"
   }
   else if(input==9){
       return " To know about eligibility press e9, for documents required press d9."
   }
   else if(input=="e9"){
    return "Eligibility Criteria:<br/>1)Women resident of Gujarat and belongs to Scheduled Caste are eligible under this scheme<br/>2)Applicant’s annual family income should not more than Rs. 11,000"
   }
   else if(input=="d9"){
    return "Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Age proof<br/>5)Application form (if available)<br/>6)Caste certificate<br/>7)Passport size photograph<br/>8)Income certificate<br/>"
   }
   else if(input==10){
       return " To know about eligibility press e10, for documents required press d10."
   }
   else if(input=="e10"){
    return "Eligibility:<br/>1)Girls resident of Gujarat<br/>2)Girls belong to Scheduled Class<br/>3)Annual family income should not more than Rs. 11,000<br/>"
   }
   else if(input=="d10"){
    return "Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Caste certificate<br/>5)Age proof: Birth certificate<br/>6)Passport size photograph<br/>7)Income certificate<br/>8)Bank details e.g. IFSC code, MICR code, Account no<br/>"
   }
   else if(input==11){
       return "To know about eligibility press e11, for documents required press d11."
   }
   else if(input=="e11"){
    return "Eligibility Criteria:<br/>1)Widow resident of Gujarat<br/>2)Widow age between 18 to 16<br/>3)Women belong to weaker economic background."
   }
   else if(input=="d11"){
    return "Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Widow certificate (if available)<br/>5)Passport size photograph<br/>6)Death certificate of husband (if available)<br/>7)Income certificate<br/>8)Age proof<br/>9)Account in Post Office<br/>"
   }
   else if(input==12){
       return "To know about eligibility press e12, for documents required press d12."
   }
   else if(input=="e12"){
    return "Eligibility Criteria:<br/>1)Women resident in India are eligible under this scheme<br/>2)Women who are illiterate, poor, live in rural area are eligible to get benefits of scheme."
   }
   else if(input=="d12"){
    return "Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Caste certificate<br/>5)Age proof: Birth certificate<br/>6)Passport size photograph<br/>7)Income certificate<br/>8)Bank details e.g. IFSC code, MICR code, Account no."
   }
   else if(input==13){
       return "To know about eligibility press e13, for documents required press d13."
   }
   else if(input=="e13"){
    return "Eligibility Criteria:<br/>1)Girls resident of India/ Gujarat are eligible under this scheme<br/>2)Girls of age 11 to 18 years are eligible under this scheme<br/>3)Girls belonging to families whose annual income is low<br/>4)Girls of rural and urban areas are eligible."
   }
   else if(input=="d13"){
    return "Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Age proof: Birth certificate<br/>5)Passport size photograph<br/>6)Income certificate."
   }
   else if(input==14){
       return "To know about eligibility press e14, for documents required press d14."
   }
   else if(input=="e14"){
    return "Eligibility Criteria:<br/>1)Gujarat resident are eligible<br/>2)Below Poverty Line card holder are eligible<br/>3)Benefits are limited to two girl children in each household born on or after 15 August 1997<br/>4)Till the girl child becomes marriage age or up to 18 years, she is eligible to get the benefit amount."
   }
   else if(input=="d14"){
    return "Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)Birth certificate<br/>4)BPL Ration card<br/>5)Passport size photograph<br/>6)Income certificate<br/>7)Post account or Bank details e.g. IFSC code, MICR code, Account no."
   }
   else if(input==15){
       return " To know about eligibility press e15, for documents required press d15."
   }
   else if(input=="e15"){
    return "Eligibility Criteria:<br/>1)Women resident of Gujarat are eligible<br/>2)Women who are illiterate, poor, unskilled etc. lives in rural or urban area are eligible to get benefits of scheme."
   }
   else if(input=="d15"){
    return "Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill etc.<br/>2)Identity proof: Aadhar card, Voter ID etc.<br/>3)BPL card (if available)<br/>4)Age proof: Birth certificate<br/>5)Passport size photograph"
   }
   else if(input==16){
       return " To know about eligibility press e16, for documents required press d16."
   }
   else if(input=="e16"){
    return "Eligibility Criteria:<br/>1)If you belong to rural area i.e. poor family then you can take advantage of this scheme."
   }
   
   else if(input=="d16"){
    return "Documents Required:<br/>1)Aadhar Card<br/>2)Voter ID<br/>3)Passport size photograph<br/>4)Aadhar Card of husband."
   }
   else if(input==17){
       return "To know about eligibility press e17, for documents required press d17."
   }
   else if(input=="e17"){
    return "Eligibility Criteria:<br/>1)This scheme is especially introduced for woman so she must be from rural area<br/>2)She must belong to BPL (below poverty line) means yellow ration card."
   }
   else if(input=="d17"){
    return "Documents Required:<br/>1)Yellow ration card (BPL)<br/>2)Identity poof e.g. Aadhar card<br/>3)Residence proof."
   }

   else if(input=="m"){
       return "Press <br/> 1) Beti Bachao Scheme <br/> 2) Vahali Dikri Yojana <br/> 3) Saraswati Sadhana Yojana <br/> 4) Janani Suraksha Yojana <br/> 5) Janani Shishu Suraksha Yojana <br/> 6) Fish Enterpreneur Yojana <br/> 7) Sakhi Mandal Yojana <br/> 8) Chiranjevi Yojana <br/> 9) Sat Fera Samuh Yojana <br/> 10) Kunverbai Mameru Yojana <br/> 11) Vidhva Sahay Ane Talim Yojana <br/> 12) Swayam Sidh Yojana <br/> 13) Kishori Shakti Yojana <br/> 14) Balika Samruddhi Yojana <br/> 15) Gaurav Nari Niti Yojana <br/> 16) Pradhan Mantri Matru Vandana Yojana <br/> 17) Pradhan Mantri Ujjwala Yojana <br/>&nbsp; &nbsp;Main menu-m <br/>&nbsp; &nbsp;Refresh chatbot-r <br/>&nbsp; &nbsp;Address-a1"
       
   }
   else if(input=="r"){
       location.reload();
   }
   
   else{
       return "Enter valid input!"
   }
}



// function getBotResponse(input) {
   

//     if(input==1){
//         return "To know about eligibility press e1, for documents required press d1 and for address press a1"
//     }
//     else if(input=="e1"){
//         return "Eligibility Criteria : <br/>1) Gujarat resident are eligible <br/>2) Age of the women should be below 35 years <br/>3) When there is only one daughter, the age of the daughter should be more than one year <br/>4) Social Defence Certificate is given to families who adopt family planning after having one or two daughters or and have no son."
//     }
//     else if(input=="d1"){
//         return "Identity proof: Aadhar card, Voter ID <br/>3) Women’s age proof: birth certificate etc.<br/>4) BPL Ration card <br/>5) Passport size photograph <br/>6) Bank passbook copy <br/>7) Bank details e.g. IFSC code, MICR code, Account no"
//     }


//     else if(input=="a1"){
//         return "address for <br/> Ahmedabad-press ad1 <br/> Amreli-press ad2 <br/> Anand-press ad3 <br/> Rajkot-press ad4 <br/> Vadodra - press ad5 <br/> Surat- press ad6 <br/>Bharuch - press ad7<br/>Bhavnagar - press ad8" 
//     }


//     //addresses 
//     else if(input=="ad1"){
//         return "address for Ahmedabad is : Office of the Collector & District Magistrate <br/>Near Subhash Bridge Circle, <br/>R.T.O Ashram Rd, Hridaya Kunj, <br/>Old Wadaj, Ahmedabad,<br/>Gujarat - 380027"
//     }
//     else if(input=="ad2"){
//         return "Address for Amreli: JAN SUVIDHA KENDRA, SHOP-9, GIRIRAJ APARTMENT, HATHSANI ROAD, SAVARKUNDLA, AMRELI, GUJARAT-364515"
//     }
//     else if(input=="ad3"){
//         return "Address for Anand:  Borsad Chokdi Road, Jitodia, Anand, Gujarat"
//     }
//     else if(input=="ad4"){
//         return "Address for Rajkot: Nandanavan Society, Panchayat Nagar, Rajkot, Gujarat 360005"
//     }
//     else if(input=="ad5"){
//         return "Address for Vadodra: Nandanvan Complex, Susen - Tarsali Ring Road, Nandanvan Society, Tarsali, Near Ganesh Aluminium, Vadodara, Gujarat 390009"
//     }
//     else if(input=="ad6"){
//         return "Address for Surat: District Collector Office New Jilla Seva Sadan, Block B, 5th Floor Athwalines, Surat, Gujarat 395001"
//     }
//     else if(input=="ad7"){
//         return "Address for Bharuch: Shaktinath, Railway Colony, Bharuch, Gujarat 392001"
//     }
//     else if(input=="ad8"){
//         return "Address for Bhavnagar: Shilpi Nagar, Bhavnagar, Gujarat 364001"
//     }




//     else if(input==2){
//         return "To know about eligibility press e2, for documents required press d2 and for address press a2" 
//     }
//     else if(input=="e2"){
//         return "Eligibility Criteria : <br/>1)This scheme is for the first two girl children of the family <br/>2) Applicant must belong to Gujarat state <br/>3) Applicant must have a bank account <br/>4) The annual income of the applicant’s family should not be more than Rs. 2 Lakh"
//     }
//     else if(input=="d2"){
//         return "Documents Required : <br/>1) Domicile Certificate <br/> 2)Birth Certificate <br/>3) Income Certificate (Upto 2 Lakh Rupee Annual) <br/> 4)Parents Identity Proof <br/> 5)Bank Account Passbook <br/> 6)Photograph"
//     }
    
//     else if(input==3){
//         return "To know about eligibility press e3, for documents required press d3 and for address press a3 "
//     }
//     else if(input=="e3"){
//         return "Eligibility criteria : <br/>1) Candidate should be an Indian National <br/>2) Girl must be from SC, ST or OBC category <br/> 3)Girl child must be below 8th grade <br/> 4)Girl must be from Below Poverty Line."
//     }
//     else if(input=="d3"){
//         return "Documents Required : <br/>1)Caste Certificate <br/>2)Birth Certificate <br/>3)Aadhar Card (Girl’s, Father’s) <br/> 4)BPL card <br/>5)Income Certificate <br/>6)Previous Years education pass mark sheet"
//     }
    
//     else if(input==4){
//         return "To know about eligibility press e4, for documents required press d4 and for address press a4"
//     }
//     else if(input=="e4"){
//         return "Eligibility Criteria:<br/> Women belonging to BPL family or any women of the SC/ST community irrespective of their income."
//     }
//     else if(input=="d4"){
//         return "Documents Required:<br/>1) Aadhaar <br/>2) Bank Account Passbook<br/>3)Address proof <br/>4)Domicile certificate <br/>5)Ration card copy <br/> 6)Janani Suraksha Card <br/> 7)Mobile Number<br/> 8)Delivery certificate from the Hospital <br/>9)Passport size Photo"
//     }
    
//     else if(input==5){
//         return "To know about eligibility press e5, for documents required press d5 and for address press a5"
//         // documents required 
//     }
//     else if(input=="e5"){
//         return "Eligibility Criteria: <br/> All pregnant women including normal deliveries and caesarean operations and sick newborn (up to 30 days after birth) in Government health institutions in both rural & urban areas."
//     }
//     else if(input=="d5"){
//         return "documents of yojana 5"
//     }
    
//     else if(input==6){
//         return "To know about eligibility press e6, for documents required press d6 and for address press a6"
//     }
//     else if(input=="e6"){
//         return "Eligibilty Criteria: <br/> Women belonging to Scheduled Caste or Scheduled Tribe and residence of Gujarat are eligible under this scheme."
//     }
//     else if(input=="d6"){
//         return "Documents Required: <br/>1)Caste certificate <br/> 2)Residence proof <br/>3)Identity proof<br/> 4)BPL Ration card(if available) <br/> 5)Passport size photograph."
//     }
    
//     else if(input==7){
//         return "To know about eligibility press e7, for documents required press d7 and for address press a7"
//     }
//     else if(input=="e7"){
//         return "Eligibility Criteria: <br/>1)Women are eligible for the Yojna <br/>2)Women must be from below poverty line <br/>3)Women must be from rural area."
//     }
//     else if(input=="d7"){
//         return "Documents Required : <br/>1)Caste Certificate <br/>2)Birth Certificate <br/>3)Aadhar Card <br/>4)BPL card <br/>5)Income Certificate <br/>6)Ration Card"
//     }
    
//     else if(input==8){
//         return "Eligibility Criteria: <br/>The women who belong to BPL (Below Poverty Line ) and APL (Above Poverty Line) and who are pregnant are eligible to get benefits of Chiranjeevi Yojana.<br/><br/>Documents Required: <br/>1)The women required to have BPL or APL ration card <br/>2)Tribal certificate <br/> 3)Authorization by local recognized authority <br/>4)Application form is available with hospital itself"
//     }
//     else if(input==9){
//         return " Eligibility Criteria:<br/>1)Women resident of Gujarat and belongs to Scheduled Caste are eligible under this scheme<br/>2)Applicant’s annual family income should not more than Rs. 11,000<br/><br/>Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Age proof<br/>5)Application form (if available)<br/>6)Caste certificate<br/>7)Passport size photograph<br/>8)Income certificate<br/>"
//     }
//     else if(input==10){
//         return " Eligibility Criteria:<br/>1)Girls resident of Gujarat<br/>2)Girls belong to Scheduled Class<br/>3)Annual family income should not more than Rs. 11,000<br/><br/>Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Caste certificate<br/>5)Age proof: Birth certificate<br/>6)Passport size photograph<br/>7)Income certificate<br/>8)Bank details e.g. IFSC code, MICR code, Account no<br/>"
//     }
//     else if(input==11){
//         return " Eligibility Criteria:<br/>1)Widow resident of Gujarat<br/>2)Widow age between 18 to 16<br/>3)Women belong to weaker economic background<br/><br/>Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Widow certificate (if available)<br/>5)Passport size photograph<br/>6)Death certificate of husband (if available)<br/>7)Income certificate<br/>8)Age proof<br/>9)Account in Post Office<br/>"
//     }
//     else if(input==12){
//         return "Eligibility Criteria:<br/>1)Women resident in India are eligible under this scheme<br/>2)Women who are illiterate, poor, live in rural area are eligible to get benefits of scheme<br/><br/>Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Caste certificate<br/>5)Age proof: Birth certificate<br/>6)Passport size photograph<br/>7)Income certificate<br/>8)Bank details e.g. IFSC code, MICR code, Account no<br/>"
//     }
//     else if(input==13){
//         return "Eligibility Criteria:<br/>1)Girls resident of India/ Gujarat are eligible under this scheme<br/>2)Girls of age 11 to 18 years are eligible under this scheme<br/>3)Girls belonging to families whose annual income is low<br/>4)Girls of rural and urban areas are eligible<br/><br/>Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)BPL card (if available)<br/>4)Age proof: Birth certificate<br/>5)Passport size photograph<br/>6)Income certificate<br/>"
//     }
//     else if(input==14){
//         return "Eligibility Criteria:<br/>1)Gujarat resident are eligible<br/>2)Below Poverty Line card holder are eligible<br/>3)Benefits are limited to two girl children in each household born on or after 15 August 1997<br/>4)Till the girl child becomes marriage age or up to 18 years, she is eligible to get the benefit amount<br/><br/>Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill<br/>2)Identity proof: Aadhar card, Voter ID<br/>3)Birth certificate<br/>4)BPL Ration card<br/>5)Passport size photograph<br/>6)Income certificate<br/>7)Post account or Bank details e.g. IFSC code, MICR code, Account no<br/>"
//     }
//     else if(input==15){
//         return " Eligibility Criteria:<br/>1)Women resident of Gujarat are eligible<br/>2)Women who are illiterate, poor, unskilled etc. lives in rural or urban area are eligible to get benefits of scheme<br/><br/>Documents Required:<br/>1)Residence proof: Domicile certificate, Electricity bill etc.<br/>2)Identity proof: Aadhar card, Voter ID etc.<br/>3)BPL card (if available)<br/>4)Age proof: Birth certificate<br/>5)Passport size photograph<br/>"
//     }
//     else if(input==16){
//         return "Eligibility Criteria:<br/>1)If you belong to rural area i.e. poor family then you can take advantage of this scheme.<br/>2)Not a income tax returnee.<br/><br/>Documents Required:<br/>1)Aadhar Card<br/>2)Voter ID<br/>3)Passport size photograph<br/>4)Aadhar Card of husband<br/>"
//     }
//     else if(input==17){
//         return "Eligibility Criteria:<br/>1)This scheme is especially introduced for woman so she must be from rural area<br/>2)She must belong to BPL (below poverty line) means yellow ration card<br/><br/>Documents Required:<br/>1)Yellow ration card (BPL)<br/>2)Identity poof e.g. Aadhar card<br/>3)Residence proof<br/>"
//     }

//     else if(input=="m"){
//         return "Press <br/> 1) Beti Bachao Scheme <br/> 2) Vahali Dikri Yojana <br/> 3) Saraswati Sadhana Yojana <br/> 4) Janani Suraksha Yojana <br/> 5) Janani Shishu Suraksha Yojana <br/> 6) Fish Enterpreneur Yojana <br/> 7) Sakhi Mandal Yojana <br/> 8) Chiranjevi Yojana <br/> 9) Sat Fera Samuh Yojana <br/> 10) Kunverbai Mameru Yojana <br/> 11) Vidhva Sahay Ane Talim Yojana <br/> 12) Swayam Sidh Yojana <br/> 13) Kishori Shakti Yojana <br/> 14) Balika Samruddhi Yojana <br/> 15) Gaurav Nari Niti Yojana <br/> 16) Pradhan Mantri Matru Vandana Yojana <br/> 17) Pradhan Mantri Ujjwala Yojana <br/>main menu-m <br/> refresh chatbot-r <br/>Address-a1"
        
//     }
//     else if(input=="r"){
//         location.reload();
//     }
    
//     else{
//         return "Enter valid input!"
//     }
// }

