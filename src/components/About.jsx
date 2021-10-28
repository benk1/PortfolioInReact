import React from 'react';

import { NavLink } from 'react-router-dom';

const About = (props) => {
	return (
		<div>
			<h3>About Me!</h3>

			<div className="circularPhoto" />
			<h3>Welcome To My Code Life Story</h3>
			<div className="about">
				<p>
					I am obsessed with making things happen, in matter of fact I am more
					interested on making things better.In my Software development career,
					I started the development based on programming with Ruby Language and
					developed further with Ruby on Rails framework, now looking for a role
					as a front-end or full-stack developer. I participated in different
					projects as a trainee at Sibesonke Ltd based in Espoo city in Finland,
					where I trained and work as a software developer using Ruby and Ruby
					on Rails. I had a great time working on different software development
					methodologies including functional and unit testing on the process. I
					was lucky enough to work with another company called Integrify Oy
					located in the heart of Helsinki capital city Of Finland, where I
					built most of my projects and developed myself as a person and as a
					full web-developer, for more about what projects I have been
					building,please click the links below and check it out{' '}
					<a className="about" href="https://github.com/benk1/">
						here
					</a>{' '}
					.
				</p>

				<p>
					I have good communication skills and adaptability to different working
					environments. I am team player,highly driven motivated person,
					hardworking, quick to learn with a positive attitude under pressure.
					This is one of the reason which makes me who i am today. At the moment i am
					specializing in front-end development at Integrify oy where I am more
					working with HTML5, CSS, JAVASCRIPT, ReactJS/Redux,NodeJs and many more
					web-technologies. I have good knowledge of using GIT(version control
					system),Mysql,MongoDB databases, good with Regular expressions,
					experienced with multiple editors e.g Visual studio code as one of my
					favourite at the moment, sublime, Atom and many more. As a graduate
					with a bachelor of engineering In Information Technology, I am able
					and flexible to do any IT-related job apart from specialized one
					above. My experience have taught me how to work with different tools
					and be able to adapt to new working environments.{' '}
				</p>

				<p>
					I have team work experience with different projects. I get along with
					different kinds of people and I am eager to learn new things to
					challenge myself. I am also interested in learning foreign languages,
					in this way building my understanding and experience of other cultures
					and communities. Currently I am excellent in Finnish language as i
					have been living in Finland for some time now, apart from that I am
					fluent in written and spoken English .
				</p>
				<p>
					At my spare time, i like to take care of myself healthywise by doing
					different kind pf sports activities, one of my favourite sport is
					playing football as Americans call it soccer, couple of days in a week
					I like to go to the gym to maintain my fitness. During summer time you
					will always find me doing some evening jogging and long walks around
					the parks and enjoying the nature as it is beautiful out there.
				</p>
			</div>
		</div>
	);
};
export default About;
