let resume = {
    Head: ['Kelly Asylbek, address, phone number, LinkedIn'],
    Certifications: ['Admin, AppBuilder, Oracle Java'],
    Skills: ['Basic HtML and JS, Jira, GitHub, IntelliJ'],
    Experience: [
        {
            title : 'Software Engineer',
            startDate : 2016,
            endDate : 2019,
            employers : 'Ahead',
            location : 'San-Francisco, USA',
            info : function (){
              return this.title; this.employers; this.location;
            },
            duration : function() {
                return this.endDate - this.startDate;
            }
        },
        {
            title : 'Salesforce Developer',
            startDate : 2019,
            endDate : 2020,
            employers : 'GetFoce',
            location : 'Chicago, Il, the USA',
            info : function (){P
               return this.title; this.employers; this.location;
            },
            duration : function() {
                return this.endDate - this.startDate;
            }
        }
    ],
    Education: [
        { 
            University : 'Depaul',
            Major : 'SDET',
            academicYears : 2011-2015,
            location : 'Chicago, Il, the USA',
            info : function (){
              return this.University; this.Major; this.academicYears; this.location;
            }
        },
        { 
            University : 'Loyola',
            Major : 'BA in Education',
            academicYears : 2008-2010,
            location : 'Chicago, Il, the USA',
            info : function (){
              return this.University; this.Major; this.academicYears; this.location;
            }
        }
    ],
    aboutMyself: function (){
        console.log( 'Hi! My name is Kelly. I have '+this.Certifications+' certificates.'),
        console.log('I have' ,resume.Experience[1].duration(), ' years of experience in Education and'
             ,resume.Experience[0].duration(), ' years in Hotel Industry.');
    },
    CV: function(){
        console.log('Personal Information: '+this.Head+'')
    },
    Cert: function(){
        console.log('Certificates: '+this.Certifications+'')
    },
    Skilled: function(){
        console.log('Skills: '+this.Skills+'')
    },
    exp: function(){
        console.log('Experience: '+resume.Experience[0].info()+'. '+resume.Experience[1].info()+'');
    },
    edu: function(){
        console.log('Education: '+resume.Education[0].info()+'. '+resume.Education[1].info()+' ')
    },
}
resume.aboutMyself();
resume.Experience[0].duration();
resume.Experience[1].duration();
resume.CV();
resume.Cert();
resume.Skilled();
resume.exp();
resume.Experience[0].info();
resume.Experience[1].info();
resume.edu();
resume.Education[0].info();
resume.Education[1].info();