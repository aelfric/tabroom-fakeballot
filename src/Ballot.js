import React from 'react';
import Content from './Content';

export default class Ballot extends React.Component {

render() {
return <Content
		menu={<>


			<div className="sidenote">



			<h4>
				Tournaments
			</h4>


				<a className="blue full" href="/user/tourn/select.mhtml?tourn_id=10669">

					<span className="fivesixth">
						Sample Tournament
					</span>

					<span className="sixth mono smaller rightalign">
						NY/US
					</span>
				</a>

			<a className="martop-half blue full" href="/user/tourn/all.mhtml">
				See Past Tournaments
			</a>

			</div>



		<div className="sidenote">

			<h4>
				Judging
			</h4>




				<a className="yellow full" href="/user/judge/panels.mhtml">
					Current Ballots &amp; Panels
				</a>


				<a className="blue half" href="/user/judge/index.mhtml">
					Upcoming
				</a>

				<a className="blue half" href="/user/judge/history.mhtml?person_id=5820">
					History
				</a>

			<a className="blue half" href="/user/judge/conflicts.mhtml">
				Conflicts
			</a>

			<a className="blue half" href="/user/judge/paradigm.mhtml">
				Paradigm
			</a>

				<a className="blue full" href="/user/judge/hire.mhtml?person_id=5820">
					Offer Hired Judging Rounds
				</a>


		</div>









		<div className="sidenote">

			<h4>Your Account</h4>

			<a className="yellow full" href="/user/unfollow.mhtml">
				Edit Live Updates/Parent Memos
			</a>

			<a className="yellow full" href="/user/chapter/create.mhtml">
				Create a new school/team
			</a>

			<a className="yellow full" href="/user/tourn/request.mhtml">
				Request a new tournament
			</a>

			<a className="yellow full" href="/user/judge/search.mhtml">
				Link your person to a judge
			</a>

			<a className="yellow full" href="/user/student/search.mhtml">
				Link your person to a student
			</a>

		</div>

		</>}
		main={<>

		<h3>
			Current Ballots
		</h3>
			<span className="half">
				<h4>Pending Rounds</h4>
			</span>

			<span id="pendingrounds_buttonarea" className="half rightalign martop">
			<button id="print_pendingrounds" tabIndex="-1" className="notfirst printbutton buttonwhite redtext fa fa-sm fa-print marleft"></button><button id="output_pendingrounds" tabIndex="-1" className="notfirst printbutton buttonwhite greentext fa fa-sm fa-file-excel-o marleft"></button></span>

			<table id="pendingrounds" className="tablesorter tablesorter-default tablesorter43d170339eef5 hasStickyHeaders" role="grid">

				<thead>

					<tr className="yellowrow tablesorter-headerRow" role="row">

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted" data-column="0" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label="Round: No sort applied, activate to apply an ascending sort" style={{userSelect: "none"}}><div className="tablesorter-header-inner">
							Round
						</div></th>

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted" data-column="1" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label="Room: No sort applied, activate to apply an ascending sort" style={{userSelect: "none"}}><div className="tablesorter-header-inner">
							Room
						</div></th>

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted" data-column="2" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label="Starts: No sort applied, activate to apply an ascending sort" style={{userSelect: "none"}}><div className="tablesorter-header-inner">
							Starts
						</div></th>

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted" data-column="3" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label="Entries: No sort applied, activate to apply an ascending sort" style={{userSelect: "none"}}><div className="tablesorter-header-inner">
							Entries
						</div></th>

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted" data-column="4" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label=": No sort applied, activate to apply an ascending sort" style={{userSelect: "none"}}><div className="tablesorter-header-inner">
						</div></th>

					</tr>

				</thead>

				<tbody aria-live="polite" aria-relevant="all">


			<tr role="row" className="odd">

				<td className="">

					<span className="hidden">
						1-1
					</span>

					<a className="white padless full" href="/index/tourn/postings/round.mhtml?tourn_id=11542&amp;round_id=373544">
						OBT Round 1
					</a>


				</td>

				<td className="">
					12 
				</td>

				<td className="centeralign">
					9:00 AM EST
				</td>

				<td className="centeralign">


							<span className="eighth leftalign">
								1.
								2
							</span>
							<span className="eighth leftalign">
								2.
								3
							</span>
							<span className="eighth leftalign">
								3.
								1
							</span>

				</td>

				<td className="centeralign padless">



					
							<a className="greentext buttonwhite invert" onClick={this.props.start} href="#">

								START ROUND
							</a>

						
					

				</td>

			</tr>





			</tbody>
			</table><div className="tablesorter-sticky-wrapper tablesorter-sticky-hidden" style={{position: "fixed", top: "0px", left: "87.9219px",  visibility: "hidden", zIndex: 2, width: "707px"}}><table id="pendingrounds-sticky" className="tablesorter tablesorter-default tablesorter43d170339eef5 containsStickyHeaders tablesorter-stickyHeader tablesorter43d170339eef5_extra_table" role="grid" >

				<thead>

					<tr className="yellowrow tablesorter-headerRow" role="row">

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted tablesorter43d170339eef5_extra_headers" data-column="0" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label="Round: No sort applied, activate to apply an ascending sort" ><div className="tablesorter-header-inner">
							Round
						</div></th>

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted tablesorter43d170339eef5_extra_headers" data-column="1" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label="Room: No sort applied, activate to apply an ascending sort" ><div className="tablesorter-header-inner">
							Room
						</div></th>

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted tablesorter43d170339eef5_extra_headers" data-column="2" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label="Starts: No sort applied, activate to apply an ascending sort" ><div className="tablesorter-header-inner">
							Starts
						</div></th>

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted tablesorter43d170339eef5_extra_headers" data-column="3" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label="Entries: No sort applied, activate to apply an ascending sort" ><div className="tablesorter-header-inner">
							Entries
						</div></th>

						<th className="smaller tablesorter-header sortable tablesorter-headerUnSorted tablesorter43d170339eef5_extra_headers" data-column="4" tabIndex="0" scope="col" role="columnheader" aria-disabled="false" aria-controls="pendingrounds" unselectable="on" aria-sort="none" aria-label=": No sort applied, activate to apply an ascending sort" ><div className="tablesorter-header-inner">
						</div></th>

					</tr>

				</thead>

				
			</table></div>


	</>} />
		}
}