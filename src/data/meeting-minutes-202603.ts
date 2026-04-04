export interface MeetingMinutes {
  title: string
  date: string
  completedBy: string
  approvedBy: string
  attendance: {
    officers: number
    members: number
    total: number
  }
  pdfFilename: string
  sections: {
    heading: string
    content: string
  }[]
  newMembers: {
    name: string
    served: string
    branch: string
    dateApplied: string
    sponsor: string
    type: 'new' | 'transfer'
  }[]
  memorials: string[]
  adjournedAt: string
  membership: {
    classA: number
    social: number
  }
}

export const meetingMinutes202603: MeetingMinutes = {
  title: 'Minutes of Nittany American Legion Post 245, Inc.',
  date: 'March 19, 2026',
  completedBy: 'Larry Hess',
  approvedBy: 'Commander D.J. Watkins',
  attendance: {
    officers: 6,
    members: 11,
    total: 17,
  },
  pdfFilename: 'post-meeting-minutes-202603.pdf',
  sections: [
    {
      heading: 'Special Guests',
      content:
        'Micheal Keller is the nominee for the Elmer Haffer Camp and requested $250.00 to attend. Don Hartzell made a motion to support Micheal with the $250.00, seconded by Rich Seifert. Motion carried.',
    },
    {
      heading: 'Prospective New Members',
      content: 'No Report',
    },
    {
      heading: 'SAL',
      content: 'No Report',
    },
    {
      heading: 'Auxiliary',
      content: 'No Report',
    },
    {
      heading: 'Riders',
      content: 'No Report',
    },
    {
      heading: 'BSA',
      content: 'No Report',
    },
    {
      heading: 'Roll Call of Officers',
      content:
        'Roll call of officers was held. The following officer was absent: Donald Shalum. Excused: Phil Mowry.',
    },
    {
      heading: 'Minutes',
      content:
        'The minutes from the Post February 15, 2026 meeting were emailed. Motion to accept by Don Hartzell, seconded by Tom Palchak. Motion Carried. The minutes from the PEC March 15, 2026 meeting were handed out. No questions were raised.',
    },
    {
      heading: 'Finance Report',
      content:
        'Treasurer\u2019s report submitted by Finance Officer Chris Solo: Beginning balance of $26,253.09, minus checks written of $6,581.81, plus deposits of $12,676.80. Balance as of March 19, 2026 is $32,348.08. Motion to accept by Chris Solo, seconded by Rich Seifert. Motion carried. Subject to Audit. Post Savings Account Balance: $10,112.17.',
    },
    {
      heading: 'Membership',
      content:
        'Larry Hess reported that membership stands at 641 as of March 17, 2026. This is 94.4% of our goal of 679. Balance to goal: 38 members.',
    },
    {
      heading: 'Nominations',
      content: 'Rich Seifert reported that there is no change in the nominations.',
    },
    {
      heading: 'Events Committee',
      content:
        'Tom Palchak reported that the Special Events committee is working with the LITW on upcoming calendar events including trivia, mixed darts, Easter egg hunt, and a St. Patrick\u2019s Day dance. Tom also stated that the Special Events committee has run its course and moved to dissolve the committee as they are no longer planning events. No action was taken at this time.',
    },
    {
      heading: 'Fund Raising',
      content:
        'Mitch DeLong reported that the PA Lottery presented to the LITW on March 11, 2026 on adding Keno, Horse Racing, Lottery ticket machines, and monitors to the club. The Lottery would provide monitors and install their own internet at no cost to the club. The LITW would profit 5% from sales. This would be a six-month trial period. The HA board has already approved this. Motion by Mitch DeLong to approve, seconded by Tom Palchak. Motion carried.',
    },
    {
      heading: 'Community Service',
      content:
        'D.J. Watkins reported that the awards for the essay contest and dinner went well. The Post will be hosting a free brunch for Vietnam Veterans and guests on March 29th from 11:00 AM to 1:00 PM in recognition of Vietnam Recognition Day.',
    },
    {
      heading: 'Celebrating America',
      content: 'No Report (Position Vacant)',
    },
    {
      heading: 'Building & Grounds',
      content:
        'Mitch DeLong reported that the Spring Cleanup Day is scheduled for April 18, 2026 from 8:00 AM to 4:00 PM. Please see the separate Building & Grounds attachment.',
    },
    {
      heading: 'Honor Guard',
      content:
        'Rich Jackson reported that the Honor Guard performed one funeral last month. The Honor Guard will stand for the Vietnam Brunch program. Rich is also establishing a tax-free account with Flag and Emblem.',
    },
    {
      heading: 'Service Officer',
      content: 'No Report',
    },
    {
      heading: 'Home Association',
      content:
        'Mitch DeLong reported a budget of $3,742 for the Spring Cleanup Day. Motion to approve by Mitch DeLong, seconded by Don Hartzell. Motion carried.',
    },
    {
      heading: 'Chaplain',
      content: 'No Report (Position Vacant)',
    },
    {
      heading: 'Old Business',
      content:
        'Chris Solo reported that new bank accounts have been set up for the Adjutant, Special Events, Building & Grounds, and CSC. Debit cards were issued to all but CSC. $100 was deposited in each account to start. Each committee will report at the Post meeting each month.\n\nChuck Brickell asked about the audit mandated to be completed. Larry Hess reported that the forensic audit is too expensive and the State has not pushed this envelope. The PEC will address this issue and set up yearly audits for the four groups within the Post.\n\nD.J. Watkins reported that the website is now live at nittanypost245.org along with a new Post email address: info@nittanypost245.org. The old email will have an automatic reply directing people to the new email starting in June. DJ also mentioned that if you would like wood from out back, please sign the permit in the back office.\n\nRich Jackson reported on the Bi-County meeting and shared that Post 245 is the only Legion that hosted the Essay Awards and banquet.\n\nChuck Brickell asked about the shed extension. D.J. Watkins reported that there is approximately $12,000 in the Boy Scouts fund for it and that the High School class will draw up a new plan, which will be divided in half for use by the Post and Boy Scouts. They will also assemble it on site after tearing down the old one.',
    },
    {
      heading: 'New Business',
      content:
        'Tom Palchak reported that he will host a booth at the Boy Scouts camporee and will be receiving material from our local politician to hand out.\n\nChuck Brickell is donating $2,000 towards the Over 80, Military, and Hardship members\u2019 dues for 2027. Currently there are 117 members at $34 each for a total of $3,978.00. That leaves $1,978 needed. Larry Hess noted that there is $690 in the Post fund, bringing the remaining balance to $1,288.00. Larry Hess made a motion that the Post fund the remaining $1,288.00. Seconded by Don Hartzell. Motion carried. Larry will also review the Military list to confirm members are still on active duty.',
    },
    {
      heading: 'Written Correspondence',
      content:
        'All correspondence is in the back office for review. All notices for Legion events are also in the back office.',
    },
    {
      heading: "Commander's Comments",
      content:
        'D.J. Watkins again asked everyone to keep the Post and Club clean.\n\nPlease remember that each Friday night, there will be a moment of silence for Veterans serving and those who gave all at 1800 hours, followed by ringing the Bell of Freedom.\n\nD.J. Watkins stated that communication matters. Please do not spread rumors\u2014address any questions directly to DJ rather than creating further rumors, good or bad.',
    },
  ],
  newMembers: [
    {
      name: 'Olivia Thornton',
      served: 'Global War',
      branch: 'USA',
      dateApplied: '2-17',
      sponsor: 'Larry Hess',
      type: 'new',
    },
    {
      name: 'Robert J. Levitt',
      served: 'Vietnam',
      branch: 'USAF',
      dateApplied: '2-23',
      sponsor: 'Larry Hess',
      type: 'transfer',
    },
    {
      name: 'Jacob D. Reddington',
      served: 'Global War',
      branch: 'USA',
      dateApplied: '2-23',
      sponsor: 'Larry Hess',
      type: 'transfer',
    },
    {
      name: 'Dennis E. Johnsonbaugh',
      served: 'Vietnam',
      branch: 'USA',
      dateApplied: '2-23',
      sponsor: 'Larry Hess',
      type: 'transfer',
    },
    {
      name: 'Louis A. Berrena',
      served: 'Vietnam',
      branch: 'USA',
      dateApplied: '3-2',
      sponsor: 'DJ Watkins',
      type: 'transfer',
    },
    {
      name: 'Brian L. Doyon',
      served: 'Lebanon/Granada',
      branch: 'USN',
      dateApplied: '3-3',
      sponsor: 'Mitch DeLong',
      type: 'transfer',
    },
    {
      name: 'James M. Stuhltrager',
      served: 'Gulf War',
      branch: 'USN',
      dateApplied: '3-13',
      sponsor: 'Larry Hess',
      type: 'transfer',
    },
  ],
  memorials: ['Bradley A. Fisher', 'John Brickell'],
  adjournedAt: '8:30 PM',
  membership: {
    classA: 641,
    social: 141,
  },
}
