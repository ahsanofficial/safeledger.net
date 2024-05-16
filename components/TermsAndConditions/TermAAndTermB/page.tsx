import { Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const TermAAndTermB: React.FC = () => {
  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-center text-3xl text-blue-color mt-6'>SafeLedger Terms & Conditions</h1>
      <p className='text-center'>
        These Terms constitute a binding legal agreement between you and SafeLedger Limited.
      </p>
      <h2 className=' text-2xl text-blue-color mt-6'>Part A: Scope of Terms and Conditions</h2>
      <ul className="list-decimal">
        <li className='text-sm	ml-10 mt-4 text-slate-500	'>
          Please read the Terms carefully as they set out important clauses in relation to:
          <ol className="list-lower-alpha pl-8 text-slate-500">
            <li>a . Your use of the Website;</li>
            <li>b . Your use of any information contained on the Website and/or shared on our Social Media Pages;</li>
            <li>c . Any products and services available from or through the Website including those purchased by phone or email; and</li>
            <li>d . Both your and our liability and obligations in respect of the above.</li>
          </ol>
        </li>
        <li className='text-sm	ml-10 mt-4 text-slate-500'>
          These Terms also refer to the following policies, guidelines, and rules, which will also apply and are deemed incorporated into these Terms:
          <ol className="list-lower-alpha pl-8 text-slate-500">
            <li>a . Privacy Policy;</li>
            <li>b . Cookie Policy</li>
            <li>c . Acceptable Use Policy (see below)</li>
            <li>d . Complaints Policy</li>
          </ol>
        </li>
        <li className='text-sm	ml-10 mt-4 text-slate-500'>Part B-General Terms will apply if you visit the Website, whether as a guest or registered customer, and irrespective of whether you purchase any products or services.</li>
        <li className='text-sm	ml-10 mt-4 text-slate-500'>Part C of the Terms will additionally apply to you if and to the extent that you purchase certain products or services.</li>
        <li className='text-sm	ml-10 mt-4 text-slate-500'>Your legal rights will differ depending on whether you are a business or a Consumer. These Terms will make clear where certain clauses only apply to either businesses or Consumers.</li>
        <li className='text-sm	ml-10 mt-4 text-slate-500'>Please note that you will be classed as a business if you are buying products or services wholly or mainly for use in connection with your trade, business, craft, or profession, even if you are an individual.</li>
      </ul>
      <Typography variant="h6" gutterBottom className='text-2xl text-blue-color mt-6'>
        Part B-General Terms
      </Typography>
      <Typography className='text-sm text-slate-500'>
        This part applies to all users of the Website, whether a registered customer or not, and irrespective of whether any products or services are purchased.
      </Typography>

      <List className='text-sm'>
        <Typography className='text-xl text-blue-color mt-6'>
          1 . Acceptance of Terms
        </Typography>
        <ListItem>
          <ListItemText secondary="1.1 By using our Website and/or purchasing any products or services, you confirm that you accept and agree to comply with:r" />
        </ListItem>
        <ol className="list-decimal ml-4 pl-8 text-sm	text-slate-500">
          <li>these Terms;</li>
          <li>all policies, guidelines and rules referred to within these Terms; and</li>
          <li> any additional terms we may draw to your attention to, prior to your purchase of any products or services from or via this Website, by phone or by email.</li>
        </ol>
        <ListItem>
          <ListItemText secondary="1.2 If you do not agree with any of the above, you must not use the Website or purchase any products or services." />
        </ListItem>
      </List>
      <List className='text-xs'>
        <Typography className='text-xl text-blue-color'>
          2 . Company Information
        </Typography>
        <ListItem>
          <ListItemText secondary="2.1 This Website is operated by Safeledger Limited. Safeledger Limited is a limited company registered in England and Wales under company number 15667343, and its registered office is situated at 124-128, City Road, London, England, EC1V 2NX." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="2.2 You may communicate with the company through e-mail: info@safeledger.net" />
        </ListItem>
      </List>
      <List className='text-xs'>
        <Typography className='text-xl text-blue-color'>
          3 . Definitions
        </Typography>
        <ListItem>
          <ListItemText secondary="3.1 SafeLedger means SafeLedger Limited Company registered with Companies House in England and Wales with company number 15667343." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="3.2 Consumers hall have the meaning ascribed in section 12 of the Unfair Contract Terms Act 1977;" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="3.3 Intellectual Property Rights Means all patents, rights to inventions, utility models, copyright and related rights, trade marks, service marks, trade, business and domain names, rights in trade dress or get-up, rights in goodwill or to sue for passing off, unfair competition rights, rights in designs, rights in computer software, datasm rights, topography rights, moral rights, rights in confidential information (including know-how and trade secrets) and any other intellectual property rights, in each case whether registered or unregistered and including all applications for and renewals or extensions of such rights, and all similar or equivalent rights or forms of protection in any part of the world;" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="3.4 Social Media Pages means our YouTube channel, LinkedIn page, Instagram page and any other social media pages owned or operated by us from time to time;" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="3.5 Terms means the terms and conditions set out on this web page inclusive of both Part B and Part C where applicable;" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="3.6 Website means https://www.safeledger.net and all associated web pages;" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="3.7 We, us, our and ourselves are each references to SafeLedger Limited, unless the context requires otherwise;" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="3.8 You and your are each references to the user and/or customer visiting the Website or requiring our Services as applicable." />
        </ListItem>
      </List>
      <List className='text-xs'>
        <Typography className='text-xl text-blue-color'>
          4 . Use of the Website
        </Typography>
        <ListItem>
          <ListItemText secondary="4.1 The information on our Website is not professional advice. We are not a legal or other professional practice." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.2 All material, information, content or similar on the Website and our Social Media Pages, including in connection with or provided as part of any services we provide, is provided for general information purposes only and does not and is not intended to constitute legal, accounting or professional advice of any other kind. It cannot and should not be relied upon as such." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.3 Should you require professional advice, you must obtain this from an appropriately qualified professional before taking, or refraining from, any action and particularly before purchasing any of the products or services available or advertised on the Website. " />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.4 We shall have no liability for any claims or losses which arise due to your non-compliance with this clause." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.5 The Website allows you to create and register an account with us to gain greater access privileges and purchase products or services. If you choose to register with us, you are solely responsible for maintaining the confidentiality and security of your account and for all activities that occur on or through it - under no circumstances should you disclose your account information to anyone else. " />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.6 You agree to immediately notify us of any security breach of your account by sending an email to info@safeledger.net and using the subject heading “Account Breach”." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.7 You shall remain liable for any losses arising out of the unauthorised use of your account, and you agree to indemnify us for any loss or damage we may incur directly or indirectly resulting from such unauthorised use." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.8 We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the clauses of these Terms." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.9 You accept that any comments posted by you on our Website and/or Social Media Pages can be viewed by the public, and that we have no control over, or liability for, the way in which this information is used by 
       any third-party who views your comments." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.10 You acknowledge that our Website may include information and materials uploaded by other users of the Website, including links to Social Media Pages, video-sharing sites, bulletin boards and chat rooms. This 
         information and these materials have not been verified or approved by us. The views expressed by other users on our site do not represent our views or values. Should you wish to report any user generated 
         content and/or comments you can contact us here." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.11 We have the right to remove any posting you make on our Website and/or our Social Media Channels if, in our sole opinion, it does not comply with the content standards set out in our Acceptable Use Policy. " />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.12 Any content you upload to our Website will be considered non-confidential and non-proprietary. You retain all of your ownership rights in your content, but you are required to grant us a free of charge licence to  
         use, store and copy that content and to distribute and make it available to third parties. The rights you licence to us are described in clause 8.1 (Your licence to us)." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.13 Whenever you make use of a feature that allows you to upload content to our Website, or to contact other users of our Website, you must comply with the standards set out in our Acceptable Use Policy. " />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.14 You warrant that any such contribution does comply with those standards and does not infringe any third-party Intellectual Property Rights. You will be liable to us and shall indemnify us for any breach of that  
         warranty." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.15 This means you will be responsible for any loss or damage we suffer as a result of your breach of warranty. We have the right to remove any posting you make on our Website if, in our opinion, your post does not 
         comply with the standards set out in our Acceptable Use Policy." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.16 You are solely responsible for securing and backing up your content." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.17 You must ensure that all persons who access our Website through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.18 We reserve the right to withdraw or suspend your right to access or use the Website without liability at any time without prior notice and without disclosing our reason for doing so. We may also update, amend, or 
         withdraw any services that we offer on our Website without prior notice. We shall have no liability to you if we choose to do this, and in particular where changes in the law render or are likely to render any of our 
         services or part of them, unlawful, or would adversely increase our level of risk, we shall be entitled to withdraw such services or part thereof immediately at any time without liability." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.19 We do not warrant, represent, or guarantee that our Website will be uninterrupted, secure, or free from bugs, errors, defects, or viruses or that any defects will be corrected. In addition, we do not warrant, represent,  
         or guarantee that the Website, or server that makes it available, is free of viruses or anything else which may be harmful or destructive. You are responsible for configuring your information technology, computer 
         programmes and platform to access our Website and using your own virus protection software. " />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.20 You must not misuse our Website by knowingly or recklessly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful. You must not attempt to gain 
         unauthorized access to our Website, the server on which our Website is stored, or any server, computer or datasm connected to our Website. You must not attack our Website via a denial-of-service attack or a 
         distributed denial-of service attack. By breaching this clause, you may commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities, 
         and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our Website will cease immediately." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.21 You shall not conduct, facilitate, authorise, or permit any text or data mining or web scraping in relation to our Website or any services provided via, or in relation to, our Website. This includes using (or permitting, 
         authorising, or attempting the use of):" />
          <List component="nav" >
            <ListItem>
              <ListItemText secondary="4.21.1 any robot, bot, spider, scraper or other automated device, program, tool, algorithm, code, process, or methodology to access, obtain, copy, monitor or republish any portion of the site or any data, content,  information, or services accessed via the same; and" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="4.21.2 any automated analytical technique aimed at analysing text and data in digital form to generate information which includes but is not limited to patterns, trends, and correlations." />
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <ListItemText secondary="4.22 These clauses should be treated as an express reservation of our rights in this regard, including for the purposes of Article 4(3) of Digital Copyright Directive ((EU) 2019/790). This clause shall not apply insofar as 
         (but only to the extent that) we are unable to exclude or limit text or data mining or web scraping activity by contract under the laws which are applicable to us." />
        </ListItem>
      </List>
      <List className='text-xs'>
        <Typography className='text-xl text-blue-color'>
          5 . Links to third-party websites and services
        </Typography>
        <ListItem>
          <ListItemText secondary="5.1 The Website, and in particular our blog articles, may contain links, buttons and banners that redirect you to third-party resources and websites that may be of interest. The inclusion of any link does not mean we    
       endorse the site or have any association with its operators, nor should the inclusion of any link be viewed as an encouragement to purchase or use any third-party products or services - we provide these links to 
       you for information purposes and convenience only." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="5.2 Linked websites are not under our control and we are not responsible for the contents of any linked website including, without limitation, any link contained within a linked website, or any changes or updates to a 
       linked website. We are not responsible or liable for the privacy of your personal information on any linked website, any webcasting or any other form of transmission received from any linked website."/>

        </ListItem>
        <ListItem>
          <ListItemText secondary="5.3 These Terms do not cover your interaction with linked websites; therefore, you should carefully review the terms and conditions and privacy policies of any third-party sites you visit. Your use of any linked website is 
       at your own risk."/>
        </ListItem>
        <ListItem>
          <ListItemText secondary="5.4 Certain services made available and/or advertised via the Website are delivered by third parties. By using any product, service or functionality originating from the Website domain, you acknowledge and consent 
       that we may share your information and data, including personal data, with any third-party with whom we have a contractual relationship to provide the requested product, service, or functionality."/>
        </ListItem>
      </List>
      <List className='text-xs'>
        <Typography className='text-xl text-blue-color'>
          6 . Operation of the Website
        </Typography>
        <ListItem>
          <ListItemText secondary="6.1 We aim to update the Website regularly, but we cannot guarantee that information will be accurate, complete, and current at all times. We may update this information when necessary, and all information on the Website is subject to such modification from time to time without notice. We make no representations, guarantees, warranties or undertakings of whatever nature about the information, content or materials provided on the Website. This includes, without limitation, as to the quality, accuracy, completeness, and reliability of the information." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="6.2 We do not warrant or represent that content available on or through our Website is appropriate for use or available in jurisdictions other than England and Wales." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="6.3 We will use reasonable efforts to keep the Website available to you, but it is subject to ongoing updates and improvements, and we reserve the right to change or remove (temporarily or permanently) the Website, or any part of it, including any and all products, services, or prices, without prior notice. By accepting these Terms, you confirm that we shall not be liable to you for any such changes or removals that may take place." />
        </ListItem>
      </List>
      <List className='text-sm'>
        <Typography className='text-xl text-blue-color mt-6'>
          7 . Limitation of our liability in respect of your use of the Website
        </Typography>
        <ListItem>
          <ListItemText secondary="1.1 By using our Website and/or purchasing any products or services, you confirm that you accept and agree to comply with:r" />
        </ListItem>
        <List className="list-decimal ml-4 pl-8 text-sm	text-slate-500">
          <ListItem>
            <ListItemText secondary="7.1 The Website is provided free of charge and on an 'AS IS' and 'AS AVAILABLE' basis without any representation made and without warranty of any kind - whether expressed or implied - including, but not limited to, the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security, and accuracy." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="7.2 Any and all liability to you that may arise from your access to, and use of, the Website - whether due to negligence, breach of duty or otherwise - is excluded to the maximum extent permitted by law. Where any such liability cannot legally be excluded then, to the extent legally possible, our total liability to you shall be capped at £200." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="7.3 Nothing in these Terms shall be construed so as to exclude or limit our liability where it would be unlawful to do so including for death or personal injury as a result of our negligence or that of its employees or agents and for fraud or fraudulent misrepresentation." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="7.4 Different limitations and exclusions of liability will apply to liability arising as a result of the supply of any products or services to you, which will be set out in Part C of these Terms." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="7.5 If you are a business:" />
            <List component="nav" >
              <ListItem>
                <ListItemText secondary="7.5.1 We exclude all implied conditions, warranties, representations, or other terms that may apply to our Website or any content on it." />
              </ListItem>
              <ListItem>
                <ListItemText secondary="7.5.2 We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:" />
                <List component="nav" >
                  <ListItem>
                    <ListItemText secondary="7.5.2.1 use of, or inability to use, our Website; or" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="7.5.2.2 use of or reliance on any content displayed on our Website." />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText secondary="7.5.3 In particular, we will not be liable for:" />
                <List component="nav" >
                  <ListItem>
                    <ListItemText secondary="7.5.3.1 loss of profits, sales, business, or revenue;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="7.5.3.2 business interruption;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="7.5.3.3 loss of anticipated savings;" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="7.5.3.4 loss of business opportunity, goodwill, or reputation; or" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="7.5.3.5 any indirect or consequential loss or damage." />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText secondary="7.6 If you are a Consumer:" />
                <List component="nav" >
                  <ListItem>
                    <ListItemText secondary="7.6.1 Please note that we only provide our Website for domestic and private use. You agree not to use our Website for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of  
          business, business interruption, or loss of business opportunity." />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="7.6.2 If defective digital content that we have supplied damages a device or digital content belonging to you and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you 
          compensation. However, we will not be liable for damage that you could have avoided by following our advice to apply an update offered to you free of charge, or for damage that was caused by you failing to   
          correctly follow installation instructions, or to have in place the minimum system requirements advised by us." />
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            8 . Intellectual Property
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="8.1 Your license to us: When you upload or post content to our Website or our Social Media Pages, you grant us a worldwide, non-exclusive, royalty-free, transferable licence to use, reproduce, distribute, prepare derivative works of, display, and perform that user-generated content in connection with the services advertised or provided by and/or through the Website and across different media including to promote the Website or the services provided on or through it." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="8.2 You agree that we have the right to disclose your identity to any third-party who is claiming that any content posted or uploaded by you to our Website, or our Social Media Pages constitutes a violation of their Intellectual Property Rights or of their right to privacy." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="8.3 We are the owner or the licensee of all Intellectual Property Rights in our Website, and in the material published on it. All such rights are reserved." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="8.4 You are only permitted to view, copy, and print extracts from this Website for your own personal use; however, all rights, intellectual or otherwise, will remain with us and do not pass to you. Should you wish to use any content on the Website for any other purpose, please contact us." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="8.5 You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences separately from any accompanying text." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="8.6 Our status (and that of any identified contributors) as the authors of content on our Website must always be acknowledged except where the content is user-generated." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="8.7 You are not permitted to sell or re-sell anything available from the Website, other than to the extent expressly permitted in accordance with any product or service you have purchased, where such permission is either expressly granted or in a circumstance in which it is a necessary attribute of the product or service concerned." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="8.8 If you print off, copy, download, share or repost any part of our site in breach of these Terms, your right to use our Website will cease immediately. You must, at our option, return or destroy any copies of the materials you have made and promptly pay to us any financial gain you have made as a direct or indirect result of your breach of these Terms." />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <Typography className='text-xl text-blue-color'>
          9 . Your Privacy and Data Protection
        </Typography>
        <ListItem>
          <ListItemText secondary="9.1 We respect your confidentiality and take the protection of your personal data very seriously. We do not sell or make your data available to any third-party without your prior consent." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="9.2 You must ensure that all personal information provided to us is up to date and correct. You may alter or update any personal information provided to us as part of registration on the Website at any time by logging 
       into your account." />
        </ListItem>
        <ListItem>
          <ListItemText secondary="9.3 For the purposes of applicable data protection legislation, we will process any personal data you have provided to us in accordance with our Privacy Policy available here. You must review our Privacy Policy in full 
       before using the Website or purchasing any products or services, and if you have any queries about the manner in which we process personal data, or your rights in relation to such processing, please contact us."/>
        </ListItem>
        <ListItem>
          <ListItemText secondary="9.4 You warrant and represent to us that, if you have provided us with personal data relating to a third-party:" />
          <List component="nav" >
            <ListItem>
              <ListItemText secondary="9.4.1 You warrant and represent to us that, if you have provided us with personal data relating to a third-party:" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="9.4.2 that you have brought to the attention of any such third-party the Privacy Policy available on our Website or have otherwise provided a copy of it to the third-party. You agree to indemnify us in relation to all and  
          any liabilities, penalties, fines, awards, or costs arising from your non-compliance with these requirements." />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            10. Linking to our Website
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="10.1 You may link to any of our webpages, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="10.2 You must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part where none exists." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="10.3 You must not establish a link to our Website in any website that is not owned by you." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="10.4 Our Website must not be framed on any other site, nor may you create a link to any part of our site other than the home page." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="10.5 We reserve the right to withdraw linking permission without notice and without liability." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="10.6 The website in which you are linking must comply in all respects with the content standards set out in our Acceptable Use Policy." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="10.7 If you wish to link to or make any use of content on our site other than that set out above, please contact us here." />
            </ListItem>
          </List>
        </ListItem>
      </List>


      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            11. No Third-Party Rights
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="No person who is not a direct party to these Terms or any agreement covered by these Terms shall have any right under the Contracts (Rights of Third Parties) Act 1999 to enforce any of the clauses within them save where expressly stated." />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            12. Variation of these Terms
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="12.1 Changes to these Terms may be made by us at any time. Your use of the Website and the purchase of products or services are also subject to any such changes." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="12.2 You accept personal responsibility to check if any changes have been made to these Terms every time you visit the Website or purchase products or services from us." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="12.3 Your continued use of the Website, products or services will be deemed acceptance of any updated version of these Terms." />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            13. Miscellaneous
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="13.1 If any clause of these Terms is held to be unlawful, invalid, or unenforceable, that clause shall be deemed severed, and the validity and enforceability of the remaining clauses shall not be affected." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="13.2 In the event of there being any conflict between Part B (General Terms) and Part C (Service Specific Terms), Part C (Service Specific Terms) shall prevail." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="13.3 A waiver of any right or remedy under these Terms or by law is only effective if given in writing and shall not be deemed a waiver of any subsequent right or remedy. A failure or delay by us to exercise any right or remedy provided under these Terms or by law shall not constitute a waiver of that or any other right or remedy, nor shall it prevent or restrict any further exercise of that or any other right or remedy. No single or partial exercise of any right or remedy provided under these Terms or by law shall prevent or restrict the further exercise of that or any other right or remedy." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="13.3 A waiver of any right or remedy under these Terms or by law is only effective if given in writing and shall not be deemed a waiver of any subsequent right or remedy. A failure or delay by us to exercise any right or remedy provided under these Terms or by law shall not constitute a waiver of that or any other right or remedy, nor shall it prevent or restrict any further exercise of that or any other right or remedy. No single or partial exercise of any right or remedy provided under these Terms or by law shall prevent or restrict the further exercise of that or any other right or remedy." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="13.4 We may at any time assign, mortgage, charge, subcontract, delegate, declare a trust over or deal in any other manner with any or all of our rights and obligations under these Terms. However, you may not do so without our prior written consent. Should we decide to transfer any of our rights or obligations under this clause, will let you know and if you are a Consumer, we will ensure that the transfer will not affect your rights under these Terms." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="13.5 If you are a business, these Terms and all other documents, information, policies, and regulations referred to within them constitute the entire agreement between us in relation to your access and/or use of our Website and any purchase you make through or in relation to it. You acknowledge that you have not relied on any statement, promise, representation, assurance, or warranty made or given by us or on our behalf which is not set out in these Terms, or any other documents, information, policies, and regulations referred to within them and that you have no claim for innocent or negligent misrepresentation or negligent misstatement." />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            14. Governing Law & Jurisdiction
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="14.1 If you are a Consumer, please note that these Terms, their subject matter, and their formation, are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction except that if you are a resident of Northern Ireland, you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="14.2 If you are a business, these Terms, their subject matter, and their formation (and any non-contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales." />
            </ListItem>
          </List>
        </ListItem>
      </List>

      {/* Part B */}
      <h2 className=' text-2xl text-blue-color mt-6'>Part B: Service Specific Terms</h2>
      <ListItem>
        <ListItemText secondary="This Part C is applicable to any purchases of products or services made through the Website and any subsidiary pages or by phone or email. They must be read and agreed to in full, together with the Part B General Terms and Conditions above, which apply to any agreement between us and to your use of the Website in general." />
      </ListItem>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            15. Definitions
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="Save where expressly stated otherwise, all definitions referred to in Part B: General Terms shall apply to this Part C: Service Specific Terms. In addition to this, the following definition shall apply in this Part C: Service Specific Terms:" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="15.1 Additional Service means any service offered to you during the ordering process in relation to the service you originally requested including but not limited to those set out in clause 23.5.1;" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="15.2 Services means the services advertised on our Website as available for purchase, including but not limited to those set out in clause 16.1 and any Additional Services where applicable; and" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="15.3 Working Day means a day other than a Saturday, Sunday, or public holiday in England, when banks in London are open for business;" />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            16. Our Services
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="16.1 We are currently offering the following products and services as individual services or as packages:" />
              <List>
                <ListItem>
                  <ListItemText secondary="16.1.1 Company Services to include but not limited to:" />
                  <List>
                    <ListItem><ListItemText secondary="16.1.1.1 Company Formation Service" /></ListItem>
                    <ListItem><ListItemText secondary="16.1.1.2 Full Company Secretary Service" /></ListItem>
                    <ListItem><ListItemText secondary="16.1.1.3 Business Telephone Services" /></ListItem>
                    <ListItem><ListItemText secondary="16.1.1.4 Bank Account Referral Service (including Barclays Bank, Cashplus, Anna Bank Account)" /></ListItem>
                    <ListItem><ListItemText secondary="16.1.1.5 Company Dissolution Service" /></ListItem>
                    <ListItem><ListItemText secondary="16.1.1.6 Various one-off filing services as displayed on the Website from time to time" /></ListItem>
                    <ListItem><ListItemText secondary="16.1.1.7 Various annual filing services as displayed on the Website from time to time." /></ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <ListItemText secondary="16.1.2 Company address services to include:" />
                  <List>
                    <ListItem><ListItemText secondary="16.1.2.1 Registered Office Address Service" /></ListItem>
                    <ListItem><ListItemText secondary="16.1.2.2 Service Address Service" /></ListItem>
                    <ListItem><ListItemText secondary="16.1.2.2 Business Address Service" /></ListItem>
                  </List>
                </ListItem>
                <ListItem><ListItemText secondary="16.1.3 Reserve A Company Name Service" /></ListItem>
                <ListItem><ListItemText secondary="16.1.4 Pre-Submission Review" /></ListItem>
              </List>
            </ListItem>
            <ListItem><ListItemText secondary="16.2 Our Services do not include any of the following:" />
              <List>
                <ListItem><ListItemText secondary="16.2.1 Accountancy advisory services" /></ListItem>
                <ListItem><ListItemText secondary="16.2.2 Tax advice" /></ListItem>
                <ListItem><ListItemText secondary="16.2.3 Auditing of your books" /></ListItem>
                <ListItem><ListItemText secondary="16.2.4 Filing of annual accounts – excluding filing dormant company accounts at Companies House (DCA)" /></ListItem>
                <ListItem><ListItemText secondary="16.2.5 Legal advice" /></ListItem>
                <ListItem><ListItemText secondary="16.2.6 Advice regarding the suitability or adequacy of any Services (including but not limited any company you may purchase from us for your intended purposes)" /></ListItem>
                <ListItem><ListItemText secondary="16.2.7 Any other services not expressly mentioned." /></ListItem>
              </List>
            </ListItem>
            <ListItem><ListItemText secondary="16.3 Any documents, including but not limited to, any templates used or provided in respect of the Services have been created with reference to the most basic and usual circumstances in which they would generally be used and are not bespoke documents tailored for individual use." /></ListItem>
            <ListItem><ListItemText secondary="16.4 We will perform the Services using reasonable care and skill." /></ListItem>
            <ListItem><ListItemText secondary="16.5 We strongly recommend that you seek independent advice before ordering any of our Services. If you have not yet taken such advice, we would advise you do not proceed with any purchase until you have done so. We will not be liable for any claims or losses which arise due to your failure to take appropriate advice." /></ListItem>
            <ListItem><ListItemText secondary="16.6 If you purchase any document or template from us and you are an intermediary, you must ensure that you are will not be in breach of the Legal Services Act 2007 by preparing it. You are solely responsible for checking and considering whether it is legal for you to do so." /></ListItem>
            <ListItem><ListItemText secondary="16.7 Our Services are not available for purchase where the end user is a Scottish Limited Partnership (Scottish LP). All such purchases will be refunded, and the Services will be cancelled." /></ListItem>
            <ListItem><ListItemText secondary="16.8 More information about our Services can be found on the dedicated pages of our Website. You are solely responsible for ensuring that you have read and understand this information before purchasing any Service. In the event that any information in relation to the specification and/or price of the Services conflicts with these Terms, the pages of our Website shall prevail." /></ListItem>
            <ListItem><ListItemText secondary="16.9 We reserve the right to update, amend, or withdraw the Services (or part of them) that we offer without prior notice or explanation. We shall have no liability to you if we choose to do this. This includes but is not limited to circumstances where changes in the law render, or are likely to render any of our Services or part of them, unlawful, or would adversely increase our level of risk." /></ListItem>
            <ListItem><ListItemText secondary="16.10 Where any of our Services refer to third-party partners or we provide you any advertising, referrals, discounts, links or similar in relation to any services provided by third-party partners, then the third-party partner’s own terms and conditions will apply, and you should ensure that you have read them in full before going ahead. We shall have no liability in respect of any third-party services and any referral or similar is provided for your convenience only. You can find out more about our third-party partners on our Website." /></ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            18. Charges & Payment
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="18.1 The price of any Services that you may purchase from us is set out under the relevant service option you select on our Website. Where you place an order by phone or email, we will confirm with price with you before an order is made. Unless otherwise stated, all prices exclude VAT, which will be payable by you at the prevailing rate on the date of purchase of the Services." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.2 We generally charge you when you place your order. However, for some products we take payment at regular intervals, as explained below under “continuous payment authorisation”." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.3 Subject to any additional charges or variations in price in accordance with these Terms, the total purchase price, including VAT (if any), will be displayed in your shopping cart prior to you confirming the order. The total purchase price will not include the applicable Companies House fee which must be paid by you in addition to the price of the Services unless expressly stated." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.4 If you have purchased a renewable service, and Companies House fees increase on or before the date that your application/filing is submitted, we will be entitled to recover the increase in fee from you by charging the card we have on record. We will charge you for this amount before the date of the relevant filing/application. The increase in fee will also apply to all subsequent renewals of the service and will be added to the price of your subscription upon your next renewal." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.5 If you have purchased a one-off service and Companies House fees increase, we will be entitled to pass on this increase to you and will charge you the difference in Companies House fee between the date you purchased the service and the date your application/filing is made. We will do this by charging the card we have on file." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.6 For the avoidance of doubt, these clauses apply to all Services regardless of whether they are expressed to include the Companies House fee. Where Services are expressed to include this fee, all references are to the Companies House fee at the date of your purchase, and we shall be entitled to charge any increase in fee in accordance with the above terms." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.7 In the event that we do not receive payment of the increase in fee from you, we shall be under no obligation to provide the remainder of any Service and shall have no liability of whatever nature." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.8 If the rate of VAT changes between your order date and the date we supply the Services, we adjust the rate of VAT that you pay, unless you have already paid in full before the change in the rate of VAT takes effect." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.9 If we are unable to collect any payment you owe us, we may charge interest on the overdue amount at the rate of 4% a year above the Bank of England base rate at the time interest is charged, but at 4% a year for any period when that base rate is below 0%. This interest accrues on a daily basis from the due date until the date of actual payment of the overdue amount, whether before or after judgement. You pay us the interest together with any overdue amount." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.10 We reserve the right to update the prices of any Services without prior notice or explanation. Every effort is made to ensure that all prices displayed on the Website are correct; however, in the event of serious error, any transaction shall be voided by us, entitling you to a full refund." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.11 If you are a business, you must pay all amounts due to us in connection with the Services in full without any set-off, counterclaim, deduction or withholding (other than any deduction or withholding of tax as required by law)." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="18.12 Your acceptance of these Terms means you are granting us continuous payment authority of the card used to purchase the original Service (or an alternative one, if supplied), for the following:" />
              <List>
                <ListItem><ListItemText secondary="18.13 Renewable services - fees due will be processed on the card originally used to purchase the service (or an alternative, if supplied) on the date of expiry of the service period. Notice will always be given in advance of the expiry date of our intention to take payment, and you will have the right to cancel the service. Should you wish to cancel the service you must send notice to info@safeledger.net and we must receive this notice prior to the renewal date." /></ListItem>
                <ListItem><ListItemText secondary="18.14 Mail forwarding services - the cost of postage and handling fees will be taken on the card used to purchase the service (or an alternative if supplied), but will be processed automatically on a monthly basis." /></ListItem>
                <ListItem><ListItemText secondary="18.15 To recover any increase in Companies House fees as described in clause 18.4." /></ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            19. Refunds: General
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="19.1 The following clauses will apply in addition to any express right to a refund as stated in these Terms, but will be subject to any exclusions contained within these Terms." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="19.2 In the event you make a purchase of an Additional Service but change your mind, provided we have not already started working on providing the Additional Service and notice to cancel is given within 14 calendar days of the purchase date, you will be entitled to a refund of all fees paid to us. A refund will not be given for cancellation requests made after 14 calendar days from the date of purchase or where we have started working on providing the Additional Service you wish to cancel." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="19.3 You will not be entitled to a refund where we cancel an Additional Service (e.g. Business Telephone Service) due to your failure to supply proof of ID and proof of address as required by these Terms and as necessary to ensure we fulfil our obligations regarding the current Anti-Money Laundering regulations and KYC requirements." />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            20. Limitation of our liability in respect of the Services
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="20.1 References to liability in this section include every kind of liability arising under or in connection with Part C: Service Specific Terms including liability in contract, tort (including negligence), misrepresentation, restitution or otherwise." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.2 Nothing in this clause 20 shall limit your payment obligations for any Services or Additional Services." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.3 Nothing in the Part C: Service Specific Terms limits any liability which cannot legally be limited, including but not limited to liability for:" />
              <List>
                <ListItem><ListItemText secondary="20.3.1 death or personal injury caused by negligence;" /></ListItem>
                <ListItem><ListItemText secondary="20.3.2 fraud or fraudulent misrepresentation; and" /></ListItem>
                <ListItem><ListItemText secondary="20.3.3 breach of the terms implied by section 2 of the Supply of Goods and Services Act 1982 (title and quiet possession)." /></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.4 Subject to 20.3, our total liability to you in respect of a breach of this Part C: Service Specific Terms, or any representation given in connection with providing our Services to you, whether in contract, tort (including negligence) statute or otherwise shall be limited to the higher of (1) £200 and (2) the aggregate annual fees paid for the Services and any Additional Services, excluding Companies House filing fees and any postage fees." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.5 The following types of losses are wholly excluded (without limitation) under this Part C: Service Specific Terms:" />
              <List>
                <ListItem><ListItemText secondary="20.5.1 loss of profits." /></ListItem>
                <ListItem><ListItemText secondary="20.5.2 loss of sales or business." /></ListItem>
                <ListItem><ListItemText secondary="20.5.3 loss of agreements or contracts." /></ListItem>
                <ListItem><ListItemText secondary="20.5.4 loss of anticipated savings." /></ListItem>
                <ListItem><ListItemText secondary="20.5.5 loss of use or corruption of software, data, or information." /></ListItem>
                <ListItem><ListItemText secondary="20.5.6 loss of or damage to goodwill; and" /></ListItem>
                <ListItem><ListItemText secondary="20.5.7 indirect, special or consequential loss." /></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.6 To the fullest extent legally possible, we exclude all implied conditions, warranties, representations, or other terms that may apply to our Services and the Additional Services." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.7 Throughout the provision of the Services, you may be presented with further caveats and disclaimers together with a summary of any assumptions we have made in order to provide the Services or any aspect of them. These caveats and disclaimers shall be binding and we shall have no liability in respect of any losses you incur as a result of your failure to read them in full and take them into account." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.8 We, our agents, employees, contractors and subcontractors, shall have no liability in relation to any losses of whatever nature incurred by you or any third-party whether direct or indirect in relation to:" />
              <List>
                <ListItem><ListItemText secondary="20.8.1 any use or inability to use, unsuitability of, reliance on or errors in any template, document or other material available in connection with the Services and/or through our Website; or" /></ListItem>
                <ListItem><ListItemText secondary="20.8.2 any alteration, addition, completion or filing of any template, document or other material available in connection with the Services and/or through our Website whether by you or any third-party." /></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.9 We will have no liability of whatever nature for errors or omissions in documents that are uploaded, or not uploaded to our Website by you, or for any such documents which are subsequently rejected by Companies House." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.10 Where we use any third-party services or suppliers to provide the Services, including but not limited to third-party electronic filing facilities and any ID verification providers, we shall have no liability of whatever nature in respect of any losses whatsoever incurred by you as a result of delay, failure, errors or otherwise in respect of any of the third-party services." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.11 We will have no liability if we use information you have provided to us in accordance with clause 23.2.5." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.12 We will also have no liability in respect of any errors or omissions in documents that we have prepared for you in the provision of Services, where you have provided such incorrect or erroneous information to us, and we have acted in reliance on that information." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.13 For the avoidance of doubt and without limiting the effect of the clauses above, in respect of the Company Formation Service we shall, in particular, have no liability in respect of:" />
              <List>
                <ListItem><ListItemText secondary="20.13.1 any rejection of incorporation or problems arising due to the appointment of any persons not meeting the legal requirements for company formation. It is your responsibility to ensure all persons named on the company formation application are eligible to hold their respective positions;" /></ListItem>
                <ListItem><ListItemText secondary="20.13.2 any errors or omissions in the company formation information you provide to us, or for any such company formation application which is subsequently rejected by Companies House;" /></ListItem>
                <ListItem><ListItemText secondary="20.13.3 your choice of name or any problems which may arise due to your choice of company name;" /></ListItem>
                <ListItem><ListItemText secondary="20.13.4 your company being struck off and/or removed from the Companies House register for any reason that is not within our control, or following the cancellation or expiry of the Services you have purchased; or" /></ListItem>
                <ListItem><ListItemText secondary="20.13.5 the failure by your company to meet its statutory requirements following our actions to file the requisite forms to notify the termination of any services." /></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.14 For the avoidance of doubt and without limiting the effect of the clauses above, in respect of the any company address service we shall, in particular, have no liability in respect of:" />
              <List>
                <ListItem><ListItemText secondary="20.14.1 any losses incurred due to any act, omission, neglect, or delay by us, or our employees or agents, in the process of receiving, sorting, and forwarding mail on your behalf;" /></ListItem>
                <ListItem><ListItemText secondary="20.14.2 any strike off action whether actual or proposed where we file an RP07, and you do not provide a new address to Companies House within the relevant timeframe;" /></ListItem>
                <ListItem><ListItemText secondary="20.14.3 any mail that fails to be delivered to our offices; or" /></ListItem>
                <ListItem><ListItemText secondary="20.14.3 any mail after it has been handed to Royal Mail or our nominated courier for delivery to your preferred forwarding address." /></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.15 For the avoidance of doubt and without limiting the effect of the clauses above, in respect of the Reserve a Company Name Service, we shall, in particular, have no liability in respect of:" />
              <List>
                <ListItem><ListItemText secondary="20.15.1 your choice of name or any problems which may arise due to your choice of company name; or" /></ListItem>
                <ListItem><ListItemText secondary="20.15.2 any actions the director(s) may take in making changes to a company formed with this service, which may affect its dormant company status." /></ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.16 For the avoidance of doubt and without limiting the effect of the clauses above, in respect of the Bank Account Referral Service, we shall, in particular, have no liability in respect of the refusal or failure of any bank to provide you with an account." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="20.17 For the avoidance of doubt and without limiting the effect of the clauses above, in respect of the Full Company Secretary Service we shall, in particular, have no liability in respect of:" />
              <List>
                <ListItem><ListItemText secondary="20.17.1 your obligations or the duties imposed on you and/or any officer of the company to deliver documents to Companies House or HMRC;" /></ListItem>
                <ListItem><ListItemText secondary="20.17.2 determining when filings should take place and what content should be filed;" /></ListItem>
                <ListItem><ListItemText secondary="20.17.3 any errors or omissions in the information you provide to us, or for any filing which is rejected by Companies House based on such information;" /></ListItem>
                <ListItem><ListItemText secondary="20.17.4 Any fines imposed on officers of the company for a breach of the Companies Act 2006, arising from any late or missed filing with Companies House relating to the company in circumstances where we have not been provided by the directors with the information required to be included with such filing in the timescale provided to make that filing set out in the Companies Act 2006; or" /></ListItem>
                <ListItem><ListItemText secondary="20.17.5 your circulation of share certificates or membership certificates electronically." /></ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List>
        <Typography className='text-xl text-blue-color'>
          21. Limitation of our liability in respect of the Services
        </Typography>
        <List component="nav">
          <ListItem >
            <ListItemText secondary="21.1  All Intellectual Property Rights in or arising out of or in connection with the Services (other than Intellectual Property Rights in any materials provided by you) shall be owned by us." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="21.2  You grant us a fully paid-up, non-exclusive, royalty-free, non-transferable licence to copy and modify any materials provided by you to us for the purpose of providing the Services to you." />
          </ListItem>
        </List>
      </List>


      <List>
        <Typography className='text-xl text-blue-color'>
          22. Anti Money Laundering, ID & Authentication Code Requirements
        </Typography>
        <List component="nav">
          <ListItem>
            <ListItemText secondary="22.1 We are regulated by the Money Laundering and Terrorist Financing (Amendment) Regulations 2019 and by accepting the terms in this Part C: Service Specific Terms, you are granting us authority to carry out a digital ID verification check by Equifax, Creditsafe or a similar organisation for the purposes of checking your identity and address. You acknowledge and accept that this online check may be recorded on your credit record, and a record of the search will be retained." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="22.1 Should we be unable to successfully verify your identity and address using our digital ID verification process, we will require you to provide proof of your identity and address in the form of certified copies of the original documents to satisfy our Anti-Money Laundering procedures. Failure to comply with any request for such documents may result in the cancellation of the Services. For further information please read our ID Requirements." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="22.3 We have a regulatory responsibility to carry out due diligence checks from time to time on our customers (companies, officers, shareholders, and beneficial owners) to which we provide ongoing Services. Should any of our checks result in the discovery of illegal or unethical activities, we reserve the right to terminate any of our Services without notice and without any liability whatsoever including, but not limited to, without refund." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="22.4 We also have an obligation to meet the requirements of 'Know Your Customer' (KYC) and you will be asked to complete a short questionnaire on the business activity or activities of your company and the reason for your business relationship with us. Should any of the answers you have given change, you must notify us as soon as possible." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="22.5 All orders that include an overseas corporate entity within the structure shall be subject to an additional compliance review (an “Overseas Compliance Review”) undertaken by us for the purposes of identifying the ultimate beneficial owner(s) of the corporate entity. As part of this review, you will be required to provide all necessary documentation we decide necessary to enable us to identify the ownership structure of the overseas corporate entity and to satisfy ourselves of any individual(s) that require an identity verification check as required under the Money Laundering and Terrorist Financing (Amendment) Regulations 2019. Any ultimate beneficial owners that are identified as part of the Overseas Compliance Review will be required to undergo identity verification in accordance with these Terms. The Overseas Compliance Review shall incur an additional fee for the time spent charged at an hourly rate of £110 plus VAT and billed in increments of 15 minutes with a minimum charge of £27.50 plus VAT per incorporation (the “Overseas Compliance Review Fee”). You accept that on completion of the Overseas Compliance Review, the Overseas Compliance Review Fee shall be automatically charged to you using the payment card details stored on our system. This Overseas Compliance Review Fee is non-refundable, including where we have not been able to confirm the identity of the overseas corporate entity’s ultimate beneficial owner(s); however, the fee for the company formation package will be refunded in accordance with these Terms." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="22.6 By purchasing any of our Services, you agree to supply us with the company’s authentication code, if applicable. By purchasing any of the Services you are deemed to be giving us authorisation to order a copy of the authentication code from Companies House, or, if possible, retrieve it from any materials or correspondence we hold on to file or receive to our address in relation to your company. If you do not provide us with a valid authentication code, we may be unable to provide any of our Services." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="22.7 In the event that we supply our Services to you and you have not provided us with an authentication code, we may cancel the Services without liability or notice to you, due to our inability to carry out compulsory annual monitoring in accordance with the Money Laundering Regulations. You shall not be entitled to a refund in respect of any Services, or part of them, which have been cancelled by us for this reason." />
          </ListItem>
        </List>
      </List>


      <List>
        <Typography className='text-xl text-blue-color'>
          23. Additional terms applicable to the Company Formation Service
        </Typography>
        <List component="nav">
          <ListItem>
            <ListItemText secondary="23.1 No persons under the age of 16 are permitted to register limited companies or limited liability partnerships in the UK. The minimum age requirement for directors, company secretaries and LLP members is 16 years. Individuals not meeting this legal minimum may only hold shares in private companies limited by shares." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.2 Any person who is an undischarged bankrupt is prohibited from registering a limited company in the UK and being appointed as a director or company secretary. Undischarged bankrupts may only hold shares in private companies limited by shares." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.3 Any persons currently named on the Disqualified Directors Register may not register a limited company or limited liability partnership - any disqualified director whose ban has not yet been served in full is not permitted to act as a company director, company secretary or LLP member, unless permission is granted from the appropriate Court. Such individuals may only hold shares in private companies limited by shares." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.4 We are a specialist online company formation agent. We use secure electronic filing facilities that are made available from Companies House and other third parties. By choosing to register a company through us, or authorising us to file information on your behalf, you accept that all information will be submitted to Companies House via these third-party electronic filing facilities." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.5 By purchasing the Company Formation Service, you are granting us the right to file with Companies House, as an authorised person for and on behalf of the company, the statutory forms required to carry out the service." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.6 Provided you have complied with the formalities necessary to register a company through us, Companies House will generally complete the incorporation of your company within approximately 3 to 6 working hours (Monday - Friday, 9am - 5pm); however, in some cases it could take up to 1 Working Day - dependent on Companies House workload. We have no control over and therefore no liability in respect of this process." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.7 We offer no warranty, representation or guarantee that your company application will be approved on the same Working Day as you make your order. If it is important that your company is incorporated on the same day as you make your order, we recommend you purchase the Guaranteed Same-Day Service, which is available as an Additional Service on our checkout page, up to 3pm, Monday - Friday. You acknowledge and accept that there may be extraordinary circumstances outside of our control which may prevent the company from being incorporated on the same day as your order even where you purchase the Guaranteed Same-Day Service. Where this is the case, we shall not be liable for any delay or failure to incorporate." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.8 If we cannot submit a company application to Companies House because you have omitted information, provided incorrect information, or we require further information to allow us to do so, we will, at our option, either (a) make an attempt to contact you to obtain the information required to submit your company application to Companies House or (b) make use of any of the information we have on file for you for the purpose of submitting the incorporation or any Companies House filings to be made in relation to any other Services. Should we not manage to rectify this matter within 7 calendar days of your order being placed, we reserve the right to remove your company application information from our system after this time without liability. You shall not be entitled to a refund in these circumstances." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.9 It is your sole responsibility to ensure that any company name you choose is available for registration and can be lawfully used by you." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.10 Upon notification from Companies House of successful incorporation, your new limited company or limited liability partnership will be ready to trade immediately." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.11 You will receive a Certificate of Incorporation and other company formation documentation and the Services as described within the incorporation package you purchased on our Website. It is your responsibility to keep all certificates and documents in a safe place and ensure that they are backed up." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.12 In the event that you make a purchase of a company formation package but change your mind prior to the submission the company details to Companies House, we will refund a proportion of the fee you have paid as deemed reasonable by us, taking into account the work we have already undertaken, provided your written request for a refund is received within 14 calendar days of the date of purchase." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.13 You will not be entitled to a refund for the company formation package or any parts of it, once the company application has been submitted to Companies House, even if your company formation is rejected." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.14 In addition to the formation of the company and the company documents described above, you may optionally order additional services through us, depending upon the incorporation package you choose. These include, but are not limited to, the following: . Registered Office Address Service . Service Address Service . Business Address Service with mail forwarding . Confirmation Statement preparation and filing Service . Business bank account referral . VAT and PAYE registration . Business telephony Services . Apostilled document Service . Full Company Secretary Service." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.15 These Additional Services may be added to your company formation package prior to incorporation, or they may be purchased after incorporation for an existing company." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="23.16 For Confirmation Statement Services, we will send you an email asking for information about your company details to allow us to file your confirmation statement. Where you do not provide all of the information requested within a reasonable time, a confirmation statement will not be filed, and we shall have no liability for a confirmation statement not being filed for this reason." />
          </ListItem>
        </List>
      </List>


      <List>
        <Typography className='text-xl text-blue-color'>
          24. Additional terms applicable to all company address services
        </Typography>
        <List component="nav">
          <ListItem>
            <ListItemText secondary="24.1 If payment for renewal of a Registered Office Address Service has not been made on or before the anniversary of the date of the previous payment, or you have failed to provide the required ID, you will be deemed irrevocably to have authorized us to change, with immediate effect, the registered office address of the company to your residential address or any other address you have previously provided us for this purpose. If you are a non-UK resident and do not have a UK address to use for this purpose, we will apply to Companies House to have our address removed by form RP07. This new address information will be registered with Companies House and displayed on public record." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="24.2 When you purchase a Registered Office Address Service from us, this provides you with a mail forwarding service for official government mail from UK government bodies and Court documents. This service also allows you to fulfill your company's statutory obligations as per section 86 of the Companies Act 2006. This service does not provide you with a trading address and must not be used as the principal place of business address for VAT registration purposes." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="24.3 When you purchase a Service Address Service from us, this service provides you with a mail forwarding service for official government mail from UK government bodies and Court documents. This service also allows you to fulfill the officer of the company's statutory obligations as per section 1141 of the Companies Act 2006. This service does not provide you with a trading address and must not be used as the principal place of business address for VAT registration purposes." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="24.4 If payment for renewal of a Service Address Service has not been made on or before the anniversary of the date of the previous payment, or you have failed to provide the required ID, you will be deemed irrevocably to have authorized us to change, with immediate effect, your service address to your residential address or any other address you have previously provided us for this purpose. This new address information will be registered with Companies House and displayed on public record." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="24.5 When you purchase a Business Address Service from us, this service provides you with a mail forwarding service from all senders other than those official government agencies which are only covered by our Registered Office Service and Service Address Service. This service does not provide you with a trading address and must not be used as the principal place of business address for VAT registration purposes." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="24.6 When purchasing our Business Address Service, you will be provided with the option of scan and email delivery (i.e. our 'Digital Business Address Service'), or mail forwarding by post, by an email sent to you by us after purchase. Should you not reply to this email, your delivery method will be set to mail forwarding by post as default. Where a bank card is to be forwarded outside of the UK as part of this service, this will be sent by Royal Mail International Signed or International Tracked and charged at the respective rate, dependent on the service available in the country of delivery." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="24.7 With regards to our Business Address Services, each company can have a maximum of one other trading name, which cannot be another limited company, or a trading name associated with another limited company. Post will not be forwarded for trading names unless prior agreement has been sought and received from us, and mail for trading names we have not entered into agreement for will be returned to sender." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="24.8 Where a parcel is received for you and the forwarding address is outside of the UK, you permit us to open the parcel to estimate the value of the contents, before resealing the parcel, to enable us to complete the necessary CN22 customs form to send a parcel outside of the UK. In instances where we cannot accurately estimate the value of the contents of the parcel, we will contact you requesting the value of the contents and will only forward the parcel upon receiving a response from you. You warrant and represent to us that all responses you give in relation to the contents of the parcel will be true, accurate and not misleading and that the contents shall not be illegal or unethical in either the UK or the country in which the forwarding address is situated. Should we receive no contact from you within 30 calendar days regarding the value of the contents, the parcel will be returned to sender." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="24.9 When you purchase a Registered Office Service and/or Service Address Service from us, you are agreeing to use our Digital Mailroom Service, whereby all UK government mail, as well as Court documents, will be received at our address, securely opened and scanned by our automated mail handling equipment and sent to you by email (with the exception of cheques from official government bodies, which will be sent to your forwarding address by post). A further electronic copy of your government mail will be available for you to view, download or print, in your SafeLedger’ online customer account area. All original copies of your mail will be securely stored for a period of 7 calendar days, during which time you will be able to request they are forwarded to you by Royal Mail post. After the expiry of 7 calendar days, unclaimed mail will be securely destroyed." />
          </ListItem>
        </List>
      </List>

      <List>
        <Typography className='text-xl text-blue-color'>
          25. Additional terms applicable to the Reserve a Company Name Service
        </Typography>
        <List component="nav">
          <ListItem>
            <ListItemText secondary="25.1 As part of this service, we will register a limited company at Companies House with the name you wish to reserve. The purpose of this is to reserve that company name." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="25.2 It is the responsibility of the director(s) of the company to inform HMRC of its dormant status. We will provide a letter to use for this purpose within your order fulfillment email." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="25.3 We will file dormant company accounts and a confirmation statement for the first year, thereby fulfilling the company's statutory filing obligations for the first year." />
          </ListItem>
          <ListItem>
            <ListItemText secondary="25.4 If you would like us to continue to prepare and submit the statutory filings beyond the first year, you must renew the Dormant Company Accounts and Confirmation Statement Services on an annual basis. We will send you reminders of the renewal of these services 7 calendar days prior to the expiry date." />
          </ListItem>
        </List>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            26. Additional terms applicable to the Business Telephone Service
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="The business telephone number provided by us for the Business Telephone Number or Call Answering + Business Telephone Services is not owned by us. Requests to use or port the telephone number provided after one of our Services has expired should be made direct to the telecoms provider which owns the telephone number." />
            </ListItem>
          </List>
        </ListItem>
      </List>


      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            27. Additional terms applicable to the Bank Account Referral Service
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="27.1 Where you request a bank account through our Bank Account Referral Service, you confirm that you agree to your details being submitted on your behalf to the bank, and to being contacted directly by the bank for the purposes of fulfilling the bank account request." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="27.2 Where you request a bank account through our referral service on behalf of a third-party for whom you are making a company formation application, you warrant and represent to us that the third-party has agreed to their details being submitted on their behalf to the bank account supplier and to being contacted directly by the bank for the purposes of fulfilling the bank account request. You shall indemnify us in relation to all and any liabilities, penalties, fines, awards, or costs arising from your breach of this warranty and representation." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="27.3 The business bank accounts are opened and provided by the individual banks and are subject to the terms and conditions as set forth by the banks at the time of account opening." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="27.4 All business bank accounts are subject to the applicants' status; therefore, we cannot guarantee that an account will be provided." />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            28. Additional terms applicable to the Full Company Secretary Service
          </Typography>
          <List component="nav">
            <List>
              <ListItem>
                <ListItemText secondary="28.1 The services provided annually for your private limited company will consist of the following:" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.1.1 The provision of monthly guidance notes (one per month), chosen in our sole discretion, which will cover topics we deem relevant to running a company." />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.1.2 Maintenance of your company’s registers and minute books, including but not limited to the following:" />
                <List>
                  <ListItem>
                    <ListItemText secondary="28.1.2.1 Register of Members as required to be kept by the Companies Act 2006" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.1.2.2 Register of Directors" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.1.2.3 Register of Directors Usual Residential Address" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.1.2.4 Register of Secretaries" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.1.2.5 Register of People with Significant Control" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.1.2.6 Register of Charges (in respect of charges created before 6 April 2013)" />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.2 Provision of such company secretarial advice and assistance as required (e.g. preparation of board minutes, resolutions, Companies House forms/filings etc.) for up to fifteen transactions per year. The following transactions are included in the fixed annual fee service (as detailed below at 28.2):" />
                <List>
                  <ListItem>
                    <ListItemText secondary="28.2.1 Change of Registered Office address" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.2 Change of Accounting Reference Date" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.3 Approval of annual accounts" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.4 Change of company name" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.5 Appointment of director" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.6 Resignation of director" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.7 Transfer of shares (up to 2 shareholders)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.8 Issue of shares (up to 2 shareholders)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.9 Add or remove a guarantor (for companies limited by guarantee))" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.10 Acquisition by the company of its own shares for no consideration" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.11 People with Significant Control filings" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.12 Change of director or secretary details" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.13 Notification or change to a Single Alternative Inspection Location (SAIL)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.14 Director resolution to add, remove, or change the details of an individual on the company’s bank mandate" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.15 Basic director approval to enter into an agreement" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.16 Basic interim or final dividend approval" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.17 Dormant company accounts" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.18 Consolidation of share certificates" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.19 Authorising or de-authorising an individual to act as a signatory" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.20 Replace lost share certificates (including indemnity form)" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.2.21 Filing of additional confirmation statement to update SIC codes, statement of capital and/or shareholder list" />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.3 We charge a fixed annual fee of £149.00 plus VAT. If any additional company secretarial services are required from us, we will charge an additional fee in accordance with our standard rates. Our services will be renewed automatically after a 12-month period (unless you choose not to renew the service). Where services are not renewed or are otherwise terminated, we will:" />
                <List>
                  <ListItem>
                    <ListItemText secondary="28.3.1 issue you with a letter of disengagement confirming the termination of our services; and" />
                  </ListItem>
                  <ListItem>
                    <ListItemText secondary="28.3.2 provide you with a final copy of your company registers in electronic format kept by us, if explicitly requested by you within one month of expiry or termination of the service." />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.4 If you have asked us to file a Companies House form that triggers an associated filing fee and Companies House rejects the application for any reason, then we shall have no obligation to return to you any Companies House fees or any transaction fees incurred pursuant to that rejection." />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.5 Our services listed above at clause 28.1 do not negate the statutory obligations of the directors of your company under the Companies Act 2006. It remains the responsibility of the directors of your company to ensure that all statutory registers of the company are a true and accurate representation of your company’s position." />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.6 It is your responsibility to ensure that we are informed of all transactions or changes that occur to your company, and all required information pertaining to said transactions or changes that occur to your company that necessitate the statutory registers to be amended" />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.7 If we do not receive the required information or are not told of changes that have occurred to your company, we will not be responsible for any delay caused as a result. If additional work is required to correct or compensate for a mistake made as a result of incomplete or otherwise incorrect information or action on your part, we may charge you an additional sum for that work." />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.8 If we require any information or action from you to enable us to provide the services, we will inform you of this as soon as is reasonably possible." />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.9 Nothing in these Terms or the services provided by us overrides your obligations or the duties imposed on you to deliver documents to Companies House or HMRC in a timely manner, and although we may send reminders to you about filing requirements, we have no liability in respect of determining when filings should take place and what content should be filed." />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.10 We will send any transactional documents that we produce at your request (for example, in accordance with clause 28.1(iii) of these Terms) to the relevant person(s) electronically via DocuSign for execution. Unless you expressly inform us otherwise, by purchasing the Full Company Secretary Service, you are confirming that your company permits the execution of documents electronically." />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.11 Electronic copies of executed share certificates or membership certificates (whichever is applicable) will be provided to you following any transaction for which the documentation has been drafted by us (for example, following the completion of an issue of shares drafted in line with clause 28.1 (iii) of these Terms). We recommend that you only circulate hard copies of these share certificates or membership certificates." />
              </ListItem>
              <ListItem>
                <ListItemText secondary="28.12 You acknowledge and agree that it shall be the responsibility of the directors to provide us promptly with all information that is required for us to make all filings at Companies House on behalf of the company and the general maintenance of the statutory register and company registers of the company." />
              </ListItem>
            </List>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            The use of this website is subject to the following terms of use:
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="‣The content of the pages of this website is for your general information and use only. It is subject to change without notice." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="This website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions. All trademarks reproduced in this website that are not the property of, or licensed to RegisterKaro are acknowledged on the website." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense. From time to time this website may also include links to other websites. These links are provided for your
  convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s)." />
            </ListItem>
            <ListItem>
              <ListItemText secondary="‣You may not create a link to this website from another website or document without Safe Ledger's prior written consent. Your use of this website and any dispute arising out of such use of the website are subject to 
  the laws of India or regulatory authority within the country of India. " />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            Cancellation Policy
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="When you buy our products/services, your purchase is covered by our 2 hours money-back guarantee. If you are, for any reason, not entirely happy with your purchase, we will cheerfully issue a full refund, subject to
deductions for legal documents or services provided. To request a refund under this guarantee, you must contact us within the first 2 hours of your payment. Just send an email to  " />
              <Link href="">
                accounting@registerkaro.in
              </Link><br />
              <Link href="">
                We will gladly refund you 100% of your fees within 24-72 hours of your refund request.
              </Link>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
            Refund Policy
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary=" When you buy our products/services, your purchase is covered by our 2 hours money-back guarantee. If you are, for any reason, not entirely happy with your purchase, we will cheerfully issue a full refund, subject
 to deductions for legal documents or services provided. To request a refund under this guarantee, you must contact us within the first 2 hours of your payment. Just send an email to accounting@registerkaro.in 
We'll gladly refund you 100% of your fees within 24-72 hours of your refund request. " />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
          Privacy Policy
          </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary=" This privacy policy sets out how Registerkaro uses and protects any information that you provide to RegisterKaro when you use this website.
RegisterKaro is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will 
only be used in accordance with this privacy statement. RegisterKaro may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with
 any changes. This policy is revised and effective from 01/01/2021.What we collect: We may collect the following information " />
            </ListItem>
            <List component="nav">
            <ListItem>
              <ListItemText secondary=" ‣  Name and Job title" />
              <ListItemText secondary=" ‣  Contact Information including email address & phone number" />
              <ListItemText secondary=" ‣  Demographic Information such as City, postcode, preferences, and interests" />
              <ListItemText secondary=" ‣  Other Information relevant to service inquiry, customer surveys, and/or offers" />
            </ListItem>
          </List>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
          Controlling your Personal Information
                    </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary=" You may choose to restrict the collection or use of your personal information in the following ways:" />
            </ListItem>
            <List component="nav">
            <ListItem>
              <ListItemText secondary="‣  whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for promotional purposes. If such a box is not 
   available, you may choose not to fill such a form. However, by submitting the filled inquiry form, you will be construed to have foregone your right and Company may choose to send promotional emails and 
   materials from time to time." />
              <ListItemText secondary="‣  if you have previously agreed to us using your personal information for promotional purposes, you may change your mind at any time by writing to or emailing us at support@registerkaro.in" />
            </ListItem>
            <ListItemText secondary="We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information
about third parties which we think you may find interesting." />
          </List>
          </List>
        </ListItem>
      </List>

      <List className='text-xs'>
        <ListItem>
          <Typography className='text-xl text-blue-color'>
          Contacting Us
                    </Typography>
          <List component="nav">
            <ListItem>
              <ListItemText secondary="If there are any questions regarding this privacy policy you may contact us using the information below:" />
            </ListItem>
            <ListItem>
              <ListItemText secondary="Safe Ledger Pvt. Ltd." />
              <ListItemText secondary="Unit 101, 139," />
              <ListItemText secondary="HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008" />
              <ListItemText secondary="Tel.: +91 8015230372" />
            </ListItem>
          </List>
        </ListItem>
      </List>
    </div>
  );
};

export default TermAAndTermB;
