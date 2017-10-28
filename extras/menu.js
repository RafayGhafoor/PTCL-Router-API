var MENU_OPTION_USER              = 0;
var MENU_OPTION_STANDARD          = 1;
var MENU_OPTION_PROTOCOL          = 2;
var MENU_OPTION_FIREWALL          = 3;
var MENU_OPTION_NAT               = 4;
var MENU_OPTION_IP_EXTENSION      = 5;
var MENU_OPTION_WIRELESS          = 6;
var MENU_OPTION_VOICE             = 7;
var MENU_OPTION_SNMP              = 8;
var MENU_OPTION_UPNP              = 9;
var MENU_OPTION_DDNSD             = 10;
var MENU_OPTION_SNTP              = 11;
var MENU_OPTION_EBTABLES          = 12;
var MENU_OPTION_BRIDGE            = 13;
var MENU_OPTION_TOD               = 14;
var MENU_OPTION_SIPROXD           = 15;
var MENU_OPTION_DHCPEN            = 16;
var MENU_OPTION_QOS               = 17;
var MENU_OPTION_PORTMAP           = 18;
var MENU_OPTION_IPP               = 19;
var MENU_OPTION_WIRELESS_SES      = 20;
var MENU_OPTION_RIP               = 21;
var MENU_OPTION_IPSEC             = 22;
var MENU_OPTION_CERT              = 23;
var MENU_OPTION_WL_QOS            = 24;
var MENU_OPTION_TR69C             = 25;
var MENU_OPTION_VDSL              = 26;
var MENU_OPTION_URLFILTER       = 27;
var MENU_OPTION_IPV6_SUPPORT      = 28;
var MENU_OPTION_IPV6_ENABLE       = 29;
var MENU_OPTION_DNSPROXY          = 30;
var MENU_OPTION_POLICY_ROUTING    = 31;
var MENU_OPTION_OMCI = 32;
var MENU_OPTION_CHIPID = 33;
var MENU_OPTION_WIRELESS_NUM_ADAPTOR =34;
var MENU_OPTION_DIAG_P8021AG      =35;
var MENU_OPTION_ETHWAN            =36;
var MENU_OPTION_PTMWAN            =37;
var MENU_OPTION_PWRMNGT           =39;
var MENU_OPTION_VOICE_NTR         =40;
var MENU_OPTION_ATMWAN            =41;
var MENU_OPTION_MOCAWAN           =42;
var MENU_OPTION_VOICE_DECT        =43;
var MENU_OPTION_DSL_BONDING       =44;
var MENU_OPTION_MULTICAST         =45;
var MENU_OPTION_VPN               =46;
var MENU_OPTION_STORAGESERVICE    =47;
var MENU_OPTION_SUPPORT_MOCA      =48;
var MENU_OPTION_STANDBY           =49;
var MENU_OPTION_DLNA              =50;
var MENU_OPTION_WIRELESS_WAPI_AS  =51;

var MENU_OPTION_SYSUSER                   = 52;
var MENU_OPTION_SPTUSER                   = 53;
var MENU_OPTION_USRUSER                   = 54;

var MENU_OPTION_SRV_CNTR                = 55;
var MENU_OPTION_MULTINAT                = 56;
var MENU_OPTION_NEW_ADSLWAN_CFG         = 57;
var MENU_OPTION_NEW_VDSLWAN_CFG         = 58;
var MENU_OPTION_NEW_ETHWAN_CFG          = 59;
var MENU_OPTION_WAN_3G_CFG          = 60;
var MENU_OPTION_PACKET_ACCELERATION          = 61;
var MENU_OPTION_SUPPORT_SAMBA          = 62;
var MENU_OPTION_CURIMG                 = 63;
var MENU_OPTION_IPTUNNEL = 64;
var MENU_OPTION_PPTPCLIENT           		= 65;

var wlItemsCgiCmd = new Array(
 	                    'wlswitchinterface0.wl',
                           'wlswitchinterface1.wl',
                           'wlswitchinterface2.wl',
                           'wlswitchinterface3.wl'
                          );

 var wlmenuTitle = new Array(
 	                    'wl0',
                           'wl1',
                           'wl2',
                           'wl3'
                          );
function menuAdmin(options) {
   var std = options[MENU_OPTION_STANDARD];
   var proto = options[MENU_OPTION_PROTOCOL];
   var firewall = options[MENU_OPTION_FIREWALL];
   var ipExt = options[MENU_OPTION_IP_EXTENSION];
   var wireless = options[MENU_OPTION_WIRELESS];
   var voice = options[MENU_OPTION_VOICE];
   var snmp = options[MENU_OPTION_SNMP];
   var ddnsd = options[MENU_OPTION_DDNSD];
   var sntp = options[MENU_OPTION_SNTP];
   var ebtables = options[MENU_OPTION_EBTABLES];
   var bridge = options[MENU_OPTION_BRIDGE];
   var tod = options[MENU_OPTION_TOD];
   var QosEnabled = options[MENU_OPTION_QOS];
   var vlanconfig = options[MENU_OPTION_PORTMAP];
   var ipp = options[MENU_OPTION_IPP];
   var dlna = options[MENU_OPTION_DLNA];
   var wireless_ses = options[MENU_OPTION_WIRELESS_SES];
   var rip = options[MENU_OPTION_RIP];
   var ipsec = options[MENU_OPTION_IPSEC];
   var certificate = options[MENU_OPTION_CERT];
   var wlqos = options[MENU_OPTION_WL_QOS];
   var tr69c = options[MENU_OPTION_TR69C];
   var ipv6Support = options[MENU_OPTION_IPV6_SUPPORT];
   var ipv6Enable = options[MENU_OPTION_IPV6_ENABLE];
   var upnp = options[MENU_OPTION_UPNP];
   var urlfilter = options[MENU_OPTION_URLFILTER];
   var dnsproxy = options[MENU_OPTION_DNSPROXY];
   var pr = options[MENU_OPTION_POLICY_ROUTING];
   var omci = options[MENU_OPTION_OMCI];
   var chipId = options[MENU_OPTION_CHIPID];
   var numWl = options[MENU_OPTION_WIRELESS_NUM_ADAPTOR];
   var p8021ag = options[MENU_OPTION_DIAG_P8021AG];
   var ethwan = options[MENU_OPTION_ETHWAN];
   var ptm = options[MENU_OPTION_PTMWAN];
   var pwrmngt = options[MENU_OPTION_PWRMNGT];
   var standby = options[MENU_OPTION_STANDBY];
   var voiceNtr = options[MENU_OPTION_VOICE_NTR];
   var atm = options[MENU_OPTION_ATMWAN];
   var mocawan = options[MENU_OPTION_MOCAWAN];
   var dect = options[MENU_OPTION_VOICE_DECT];
   var dslbonding = options[MENU_OPTION_DSL_BONDING];
   var multicast = options[MENU_OPTION_MULTICAST];
   var vpn = options[MENU_OPTION_VPN];
   var storageservice = options[MENU_OPTION_STORAGESERVICE];
   var mocaCfg = options[MENU_OPTION_SUPPORT_MOCA];
   var wireless_wapi = options[MENU_OPTION_WIRELESS_WAPI_AS];
   var srvcntr = options[MENU_OPTION_SRV_CNTR];
   var multinat = options[MENU_OPTION_MULTINAT];
   var isDsl = 0;
   var newadslwancfg = options[MENU_OPTION_NEW_ADSLWAN_CFG];
   var newvdslwancfg = options[MENU_OPTION_NEW_VDSLWAN_CFG];
   var newethwancfg = options[MENU_OPTION_NEW_ETHWAN_CFG];
   var wan3gcfg = options[MENU_OPTION_WAN_3G_CFG];
   var packetAcceleration = options[MENU_OPTION_PACKET_ACCELERATION];
   var samba = options[MENU_OPTION_SUPPORT_SAMBA];
   var curimg = options[MENU_OPTION_CURIMG];
   var iptunnel = options[MENU_OPTION_IPTUNNEL];
   var pptpclient = options[MENU_OPTION_PPTPCLIENT];

    if(newadslwancfg == '1' || newvdslwancfg == '1' || newethwancfg == '1')
    {
        if(newadslwancfg == '1' || newvdslwancfg == '1')
        {
            isDsl = 1;
        }
        nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'wancfg.cmd'));	
	    insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN),'wancfg.cmd'));	
	    if ( wan3gcfg == '1')
            insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN_3G_CFG),'wan3gcfgview.html'));

    }else{
	// Configure advanced setup/layer 2 interface 
	if (atm == '1' ) {
		isDsl = 1;
		nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'dslatm.cmd'));
		nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'dslatm.cmd'));
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_DSL_ATM_INTERFACE), 'dslatm.cmd'));		
	} 
	if (ptm == '1') {
		isDsl = 1;
		if (atm != '1') {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'dslptm.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'dslptm.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_DSL_PTM_INTERFACE), 'dslptm.cmd'));		
	}	   	
	if (ethwan == '1' ) {
		if (!(atm == '1' || ptm == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'ethwan.html'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'ethwan.html'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_ETH_INTERFACE), 'ethwan.html'));
	}
	if (mocawan == '1') {
		if (!(atm == '1' || ptm == '1' || ethwan == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'mocawan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'mocawan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_MOCA_INTERFACE), 'mocawan.cmd'));
	}  
	
	if (!(atm == '1' || ptm == '1' || ethwan == '1' || mocawan == '1'))
		nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'wancfg.cmd'));
	insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN),'wancfg.cmd'));

	if ( wan3gcfg == '1')
	      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN_3G_CFG),'wan3gcfgview.html'))
	
  }	

	if (vpn == '1') {
		nodeVPN = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_VPN), 'l2tpacwan.cmd'));
		insDoc(nodeVPN, gLnk('R', getMenuTitle(MENU_VPN_L2TPAC), 'l2tpacwan.cmd'));		
	}
	
   if ( ipv6Enable == '1' ) {
      nodeLAN = insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAN),'lancfg2.html'));
      insDoc(nodeLAN, gLnk('R', getMenuTitle(MENU_LANCFG),'lancfg2.html'));
      insDoc(nodeLAN, gLnk('R', getMenuTitle(MENU_LAN6),'ipv6lancfg.html'));
   }
   else {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_LAN),'lancfg2.html'));
   }

   if ( mocaCfg == '1' ) {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_MOCA_CONFIGURATION),'mocacfg.html'));
   }

   // Configure security menu
   // If firewall is enabled and not in ipExt mode enable firewall menus
   // if (proto != 'Bridge' && ipExt != '1' ) {
   if ( proto != 'Not Applicable' && ipExt != '1' ) {
      // NAT menu is always displayed now
      nodeNat = insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_SC_NAT), 'scvrtsrv.cmd?action=view'));
      insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_SC_VIRTUAL_SERVER), 'scvrtsrv.cmd?action=view'));
      insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_SC_PORT_TRIGGER), 'scprttrg.cmd?action=view'));
      insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_SC_DMZ_HOST), 'scdmz.html'));
	  if (multinat == '1')
         insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_MULTI_NAT), 'multinat.cmd?action=view'));
      // Security menu is always displayed now                   	
      nodeFirewall = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_SC_SECURITY), 'scoutflt.cmd?action=view'));
      nodeIpFlt = insFld(nodeFirewall, gFld(getMenuTitle(MENU_SC_IP_FILTER), 'scoutflt.cmd?action=view'));
      insDoc(nodeIpFlt, gLnk('R', getMenuTitle(MENU_SC_OUTGOING), 'scoutflt.cmd?action=view'));
      insDoc(nodeIpFlt, gLnk('R', getMenuTitle(MENU_SC_INCOMING), 'scinflt.cmd?action=view'));
      insFld(nodeFirewall, gFld(getMenuTitle(MENU_MAC_FILTER),'scmacflt.cmd?action=view'));

      if ( tod == '1' ) 
      {
         nodeParentalControl = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PARENTAL_CNTL),'todmngr.tod?action=view'));
         insDoc(nodeParentalControl, gFld(getMenuTitle(MENU_TOD),'todmngr.tod?action=view'));
      }
      if ( urlfilter == '1' )
         insDoc(nodeParentalControl, gFld(getMenuTitle(MENU_URLFILTER),'urlfilter.cmd?action=view'));
   }

      // Configure QoS class menu
   nodeQos = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_QOS),'qosqmgmt.html'));
   insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_QUEUE), 'qosqueue.cmd?action=view'));
   insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_CLASS), 'qoscls.cmd?action=view'));

   
   // Configure routing menu
   nodeRouting = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_ROUTING), 'rtdefaultcfg.html'));
   insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_DEFAULT_ROUTE), 'rtdefaultcfg.html'));
   insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_STATIC_ROUTE),'rtroutecfg.cmd?action=viewcfg'));
   if (pr == '1' )
      insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_POLICY_ROUTING),'prmngr.cmd?action=view'));

   if ( (proto == 'PPPoE' && ipExt == '0') ||
        (proto == 'PPPoA' && ipExt == '0') ||
        (proto == 'MER') ||
        (proto == 'IPoA') ) {
      // configure rip
      if ( rip == '1' )
         insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_RIP),'ripcfg.cmd?action=view'));
      // configure dns server
      nodeDnsSetup = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNS), 'dnscfg.html'));
      insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DNS_SETUP), 'dnscfg.html'));
      // configure ddns client
      if ( ddnsd == '1' )
         insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DDNS), 'ddnsmngr.cmd'));
   }


   if (isDsl == 1)
   {
      // Configure ADSL Setting Menu based on Annex
      if ( std == 'annex_c' )
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'adslcfgc.html'));
      else if (chipId != '6368')
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'adslcfg.html'));
      else
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'xdslcfg.html'));

      if (dslbonding == '1')
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL_BONDING), 'dslbondingcfg.html'));
   }

	// Configure upnp
	if (upnp == '1')
	   insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_UPNP), 'upnpcfg.html'));

	
   // Configure dnsproxy
   if (dnsproxy == '1')
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNSPROXY), 'dnsproxycfg.html'));

   // Configure print server
   if ( ipp == '1' )
      insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_IPP), 'ippcfg.html'));
   
   if(pptpclient == '1')
	insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PPTPCLIENT), 'pptpclient.html'));

   // Configure dlna
   if ( dlna == '1' )
      insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DLNA), 'dlnacfg.html'));

   if ( packetAcceleration == '1' )
      insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PACKET_ACCELERATION), 'packetacceleration.html'));

   // Configure wireless menu

   if ( parseInt(numWl) != 0 ) {
      if(numWl != '1')
         wlanMenu = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
 
      for(i = 0; i < parseInt(numWl); i++)
      {
         // Configure wireless menu
         if(numWl == '1')
            nodeWireless = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
         else
            nodeWireless = insFld(wlanMenu, gFld(wlmenuTitle[i], wlItemsCgiCmd[i]));

         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_BASIC), 'wlcfg.html'));
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SECURITY), 'wlsecurity.html'));
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_MAC_FILTERING), 'wlmacflt.cmd?action=view'));
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WDS), 'wlwds.cmd?action=view'));
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_ADVANCED), 'wlcfgadv.html'));
         //SUPPORT_SES
         if ( wireless_ses == '1' ) { 
            insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SES), 'wlses.html'));      
         }
      
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_STATION_LIST), 'wlstationlist.cmd'));
      }

      if ( wireless_wapi == '1' ) {      
          if (numWl == '1') {
             insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WAPI_AS), 'wlwapias.html'));
          }
          else {
             insDoc(wlanMenu, gLnk('R', getMenuTitle(MENU_WL_WAPI_AS), 'wlwapias.html'));
          }
      }
   }


     /*Storage Service menu */
   if(storageservice == '1')
   {
      nodeStorage = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STORAGESERVICE), 'storageservicecfg.cmd?view'));
      insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_INFO), 'storageservicecfg.cmd?view'));
      if(samba == '1'){
            insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_USERACCOUNT), 'storageuseraccountcfg.cmd?view'));
      }
   }

   // Configure voice menu
   if ( voice == 'MGCP' ) {
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voicemgcp_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_MGCP), 'voicemgcp_basic.html'));
      if( voiceNtr != '2' ) {
         insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_NTR), 'voicentr.html'));
      }
      //insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_STATS), 'voicestats45.html'));
   }
   else if ( voice == 'H.248' ) {
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voiceh248_status.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_H248_STATUS), 'voiceh248_status.html'));

      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_H248_BASIC), 'voiceh248_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_H248_ADVANCED), 'voiceh248_advanced.html'));

   }
   else if ( voice == 'SIP' ) {
   	  //mod by huangxc for adding status page, 20100603
      //nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voicesip_basic.html'));
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voicesip_status.html'));
	  insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_STATUS), 'voicesip_status.html'));
	  //mod end
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_BASIC), 'voicesip_basic.html'));	  
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_ADVANCED), 'voicesip_advanced.html'));
	  /* add by zhangyajun on 20110429 for Nateks */
	  insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_DMAP), 'voicesip_digitmap.html'));
	  /* add end */
	  //add by huangxc for adding extra page, 20100602
	  insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_EXTRA), 'voicesip_extra.html'));
	  //add end
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_DEBUG), 'voicesip_debug.html'));
      if( voiceNtr != '2' ) {
         insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_NTR), 'voicentr.html'));
      }
      if( dect == '1' ) {
         insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_DECT), 'voicedect.html'));
      }
   }

   // Configure VLAN port mapping menu
   if ( vlanconfig == '1' ) {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_INTF_GROUPING),'portmap.cmd'));
   }
   //Add by zqw,2011-06-23,for ip tunnel menu
   if ( ipv6Support == '1' && iptunnel == '1') {
      nodeIpTunnel = insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_IP_TUNNEL),'tunnelcfg.cmd?action=viewcfg'));
      insDoc(nodeIpTunnel, gLnk('R', getMenuTitle(MENU_6IN4_TUNNEL),'tunnelcfg.cmd?action=viewcfg'));
      insDoc(nodeIpTunnel, gLnk('R', getMenuTitle(MENU_4IN6_TUNNEL),'tunnelcfg.cmd?action=view'));
   }
   //Add end
   if ( ipsec == '1' ) {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_SC_IPSEC), 'ipsec.cmd?action=view'));
   }
   if (certificate == '1')  {
      nodeCert = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_CERT), 'certlocal.cmd?action=view'));
      insDoc(nodeCert, gLnk('R', getMenuTitle(MENU_CERT_LOCAL), 'certlocal.cmd?action=view'));
      insDoc(nodeCert, gLnk('R', getMenuTitle(MENU_CERT_CA), 'certca.cmd?action=view'));
   }

   // Configure standby menu item 
   if ( standby == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STANDBY), 'standby.html'));

   // Configure power management 
   if ( pwrmngt == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PWRMNGT), 'pwrmngt.html'));
  
   if ( multicast == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_MULTICAST), 'multicast.html'));
  
  if(curimg != 'small')
  {
   // Configure diagnostics menu
   nodeDiagnostics = insFld(foldersTree, gFld(getMenuTitle(MENU_DIAGNOSTICS), 'diag.html'));
   if (p8021ag == '1') {
      insDoc(nodeDiagnostics, gLnk('R', getMenuTitle(MENU_DIAGNOSTICS),'diag.html'));
      insDoc(nodeDiagnostics, gLnk('R', getMenuTitle(MENU_DIAGP8021AG),'diag8021ag.html'));
  }
  }

   // Configure management menu
   nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'backupsettings.html'));

   nodeSettings = insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SETTINGS), 'backupsettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_BACKUP),'backupsettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_UPDATE),'updatesettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_DEFAULT), 'defaultsettings.html'));

   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SYSTEM_LOG), 'logintro.html'));

   if ( snmp == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SNMP), 'snmpconfig.html'));
   if ( tr69c == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TR69C), 'tr69cfg.html'));
   if ( omci == '1' ) {
      nodeOmci = insFld(nodeMngr, gFld(getMenuTitle(MENU_OMCI_CFG), 'omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_SET),'omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_CREATE),'omcicreate.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_NEXT),'omcigetnext.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_MACRO),'omcimacro.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_DOWNLOAD),'omcidownload.html'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_SYSTEM),'omcisystem.html'));
   }	  
   if ( sntp == '1' && proto != 'Bridge' && !(proto=='PPPoE' && ipExt=='1') && !(proto=='PPPoA' && ipExt=='1') )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_SNTP), 'sntpcfg.html'));

   nodeAccCntr = insFld(nodeMngr, gFld(getMenuTitle(MENU_ACC_CNTR), 'password.html'));
   insDoc(nodeAccCntr, gLnk('R', getMenuTitle(MENU_ACC_CNTR_PASSWORD), 'password.html'));
   if ( srvcntr == '1'){
   	insDoc(nodeAccCntr, gLnk('R', getMenuTitle(MENU_ACC_CNTR_SRVCNTR), 'scsrvcntr.html'));
   }

   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_UPDATE_SOFTWARE), 'upload.html'));

   insFld(nodeMngr, gFld(getMenuTitle(MENU_RESET_ROUTER), 'resetrouter.html'));

}

function menuSupport(options) {
   var std = options[MENU_OPTION_STANDARD];
   var proto = options[MENU_OPTION_PROTOCOL];
   var ipExt = options[MENU_OPTION_IP_EXTENSION];
   var wireless = options[MENU_OPTION_WIRELESS];
   var voice = options[MENU_OPTION_VOICE];
   var snmp = options[MENU_OPTION_SNMP];
   var ddnsd = options[MENU_OPTION_DDNSD];
   var sntp = options[MENU_OPTION_SNTP];
   var QosEnabled = options[MENU_OPTION_QOS];
   var ipp = options[MENU_OPTION_IPP];
   var rip = options[MENU_OPTION_RIP];
   var tr69c = options[MENU_OPTION_TR69C];
   var ipv6Support = options[MENU_OPTION_IPV6_SUPPORT];
   var ipv6Enable = options[MENU_OPTION_IPV6_ENABLE];
   var upnp = options[MENU_OPTION_UPNP];
   var dnsproxy = options[MENU_OPTION_DNSPROXY];
   var omci = options[MENU_OPTION_OMCI];
   var chipId = options[MENU_OPTION_CHIPID];
   var numWl = options[MENU_OPTION_WIRELESS_NUM_ADAPTOR];
   var wireless_ses = options[MENU_OPTION_WIRELESS_SES];
   var ethwan = options[MENU_OPTION_ETHWAN];
   var ptm = options[MENU_OPTION_PTMWAN];
   var pwrmngt = options[MENU_OPTION_PWRMNGT];
   var standby = options[MENU_OPTION_STANDBY];
   var atm = options[MENU_OPTION_ATMWAN];
   var mocawan = options[MENU_OPTION_MOCAWAN];
   var dslbonding = options[MENU_OPTION_DSL_BONDING];
   var multicast = options[MENU_OPTION_MULTICAST];
   var vpn = options[MENU_OPTION_VPN];
   var storageservice = options[MENU_OPTION_STORAGESERVICE];
   var mocaCfg = options[MENU_OPTION_SUPPORT_MOCA];
   var wireless_wapi = options[MENU_OPTION_WIRELESS_WAPI_AS];
   var isDsl = 0;
   var curimg = options[MENU_OPTION_CURIMG];
   var newadslwancfg = options[MENU_OPTION_NEW_ADSLWAN_CFG];
   var newvdslwancfg = options[MENU_OPTION_NEW_VDSLWAN_CFG];
   var newethwancfg = options[MENU_OPTION_NEW_ETHWAN_CFG];
   var wan3gcfg = options[MENU_OPTION_WAN_3G_CFG];
   var packetAcceleration = options[MENU_OPTION_PACKET_ACCELERATION];
   var samba = options[MENU_OPTION_SUPPORT_SAMBA];
   var iptunnel = options[MENU_OPTION_IPTUNNEL];
   var pptpclient = options[MENU_OPTION_PPTPCLIENT];

   /*add by wzy, 'support' user still show layer 2 wan interface*/
    if(newadslwancfg == '1' || newvdslwancfg == '1' || newethwancfg == '1')
    {
        if(newadslwancfg == '1' || newvdslwancfg == '1')
        {
            isDsl = 1;
        }
        nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'wancfg.cmd'));	
        insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN),'wancfg.cmd'));	
        if ( wan3gcfg == '1')
            insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN_3G_CFG),'wan3gcfgview.html'));

    }
    else //else show original wan interface menu
    {
	// Configure advanced setup/layer 2 interface 
	if (atm == '1' ) {
		isDsl = 1;
		nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'dslatm.cmd'));
		nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'dslatm.cmd'));
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_DSL_ATM_INTERFACE), 'dslatm.cmd'));		
	} 
	if (ptm == '1') {
		isDsl = 1;
		if (atm != '1') {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'dslptm.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'dslptm.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_DSL_PTM_INTERFACE), 'dslptm.cmd'));		
	}	   	
	if (ethwan == '1' ) {
		if (!(atm == '1' || ptm == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'ethwan.html'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'ethwan.html'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_ETH_INTERFACE), 'ethwan.html'));
	}
	if (mocawan == '1') {
		if (!(atm == '1' || ptm == '1' || ethwan == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'mocawan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'mocawan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_MOCA_INTERFACE), 'mocawan.cmd'));
	}  
	
	if (!(atm == '1' || ptm == '1' || ethwan == '1' || mocawan == '1'))
		nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'wancfg.cmd'));
	insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN),'wancfg.cmd'));

	if ( wan3gcfg == '1')
	      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN_3G_CFG),'wan3gcfgview.html'))
	
  }	

	if (vpn == '1') {
		nodeVPN = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_VPN), 'l2tpacwan.cmd'));
		insDoc(nodeVPN, gLnk('R', getMenuTitle(MENU_VPN_L2TPAC), 'l2tpacwan.cmd'));		
	}
		
   if ( ipv6Enable == '1' ) {
      nodeLAN = insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAN),'lancfg2.html'));
      insDoc(nodeLAN, gLnk('R', getMenuTitle(MENU_LANCFG),'lancfg2.html'));
      insDoc(nodeLAN, gLnk('R', getMenuTitle(MENU_LAN6),'ipv6lancfg.html'));
   }
   else {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_LAN),'lancfg2.html'));
   }

   if ( mocaCfg == '1' ) {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_MOCA_CONFIGURATION),'mocacfg.html'));
   }

      // Configure QoS class menu
   nodeQos = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_QOS),'qosqmgmt.html'));
   insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_QUEUE), 'qosqueue.cmd?action=view'));
   insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_CLASS), 'qoscls.cmd?action=view'));

   // Configure routing menu
   nodeRouting = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_ROUTING), 'rtdefaultcfg.html'));
   insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_DEFAULT_ROUTE), 'rtdefaultcfg.html'));
   insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_STATIC_ROUTE),'rtroutecfg.cmd?action=viewcfg'));

   if ( (proto == 'PPPoE' && ipExt == '0') ||
        (proto == 'PPPoA' && ipExt == '0') ||
        (proto == 'MER') ||
        (proto == 'IPoA') ) {
      // configure rip
      if ( rip == '1' )
         insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_RIP),'ripcfg.cmd?action=view'));
      // configure dns server
      nodeDnsSetup = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNS), 'dnscfg.html'));
      insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DNS_SETUP), 'dnscfg.html'));
      // configure ddns client
      if ( ddnsd == '1' )
         insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DDNS), 'ddnsmngr.cmd'));
   }

   if (isDsl == 1)
   {
      // Configure ADSL Setting Menu based on Annex
      if ( std == 'annex_c' )
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'adslcfgc.html'));
      else if (chipId != '6368')
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'adslcfg.html'));
      else
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'xdslcfg.html'));

      if (dslbonding == '1')
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL_BONDING), 'dslbondingcfg.html'));
   }

	
   // Configure print server
   if ( ipp == '1' )
      insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_IPP), 'ippcfg.html'));
   
   // Configure upnp
   if (upnp == '1')
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_UPNP), 'upnpcfg.html'));

   // Configure dnsproxy
   if (dnsproxy == '1')
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNSPROXY), 'dnsproxycfg.html'));
   
   // Configure standby menu item 
   if ( standby == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STANDBY), 'standby.html'));
  
   if(pptpclient == '1')
	insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PPTPCLIENT), 'pptpclient.html'));


   if ( packetAcceleration == '1' )
      insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PACKET_ACCELERATION), 'packetacceleration.html'));

   // Configure wireless menu
   if ( parseInt(numWl) != 0 ) {

       if(numWl != '1')
           wlanMenu = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
 
       for(i = 0; i < parseInt(numWl); i++)
       {
   // Configure wireless menu
            if(numWl == '1')
                nodeWireless = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
	     else
		  nodeWireless = insFld(wlanMenu, gFld(wlmenuTitle[i], wlItemsCgiCmd[i]));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_BASIC), 'wlcfg.html'));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SECURITY), 'wlsecurity.html'));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_MAC_FILTERING), 'wlmacflt.cmd?action=view'));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WDS), 'wlwds.cmd?action=view'));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_ADVANCED), 'wlcfgadv.html'));
      //SUPPORT_SES
      if ( wireless_ses == '1' ) { 
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SES), 'wlses.html'));      
      }
      
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_STATION_LIST), 'wlstationlist.cmd'));
   


        }
      if ( wireless_wapi == '1' ) {      
          if (numWl == '1') {
             insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WAPI_AS), 'wlwapias.html'));
          }
          else {
             insDoc(wlanMenu, gLnk('R', getMenuTitle(MENU_WL_WAPI_AS), 'wlwapias.html'));
          }
      }
   }

     /*Storage Service menu */
   if(storageservice == '1')
   {
      nodeStorage = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STORAGESERVICE), 'storageservicecfg.cmd?view'));
      insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_INFO), 'storageservicecfg.cmd?view'));
      if(samba == '1'){
            insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_USERACCOUNT), 'storageuseraccountcfg.cmd?view'));
      }
   }

   // Configure voice menu
   if ( voice == 'MGCP' ) {
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voicemgcp_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_MGCP), 'voicemgcp_basic.html'));
      //insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_STATS), 'voicestats45.html'));
   }
   else if ( voice == 'H.248' ) {
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voiceh248_status.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_H248_STATUS), 'voiceh248_status.html'));

      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_H248_BASIC), 'voiceh248_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_H248_ADVANCED), 'voiceh248_advanced.html'));

   }
   else if ( voice == 'SIP/2.0' ) {
   	  //mod by huangxc for adding status page, 20100603
      //nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voicesip_basic.html'));
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'voicesip_status.html'));
	  insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_STATUS), 'voicesip_status.html'));
	  //mod end
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_BASIC), 'voicesip_basic.html'));	  
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_ADVANCED), 'voicesip_advanced.html'));
	  /* add by zhangyajun on 20110429 for Nateks */
	  insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_DMAP), ''));
	  /* add end */
	  //add by huangxc for adding extra page, 20100602
	  insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_EXTRA), 'voicesip_extra.html'));
	  //add end
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_DEBUG), 'voicesip_debug.html'));
   }

   //Add by zqw,2011-06-23,for ip tunnel menu
   if ( ipv6Support == '1' && iptunnel == '1') {
      nodeIpTunnel = insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_IP_TUNNEL),'tunnelcfg.cmd?action=viewcfg'));
      insDoc(nodeIpTunnel, gLnk('R', getMenuTitle(MENU_6IN4_TUNNEL),'tunnelcfg.cmd?action=viewcfg'));
      insDoc(nodeIpTunnel, gLnk('R', getMenuTitle(MENU_4IN6_TUNNEL),'tunnelcfg.cmd?action=view'));
   }

   // Configure power management 
   if ( pwrmngt == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PWRMNGT), 'pwrmngt.html'));
  
   if ( multicast == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_MULTICAST), 'multicast.html'));
  
  if(curimg != 'small')
  {
    // Configure diagnostics menu
   nodeDiagnostics = insFld(foldersTree, gFld(getMenuTitle(MENU_DIAGNOSTICS), 'diag.html'));
  }

   // Configure management menu
   nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'backupsettings.html'));
   nodeSettings = insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SETTINGS), 'backupsettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_BACKUP),'backupsettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_UPDATE),'updatesettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_DEFAULT), 'defaultsettings.html'));

   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SYSTEM_LOG), 'logintro.html'));
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SECURITY_LOG), 'seclogintro.html'));
   if ( snmp == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SNMP), 'snmpconfig.html'));
   if ( tr69c == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TR69C), 'tr69cfg.html'));
   if ( omci == '1' ) {
      nodeOmci = insFld(nodeMngr, gFld(getMenuTitle(MENU_OMCI_CFG), 'omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_SET),'omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_CREATE),'omcicreate.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_NEXT),'omcigetnext.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_MACRO),'omcimacro.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_DOWNLOAD),'omcidownload.html'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_SYSTEM),'omcisystem.html'));
   }
   if ( sntp == '1' && proto != 'Bridge' && !(proto=='PPPoE' && ipExt=='1') && !(proto=='PPPoA' && ipExt=='1') )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_SNTP), 'sntpcfg.html'));

   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_UPDATE_SOFTWARE), 'upload.html'));
   insFld(nodeMngr, gFld(getMenuTitle(MENU_RESET_ROUTER), 'resetrouter.html'));
}

function menuUser() {
   var snmp = options[MENU_OPTION_SNMP];
   var tr69c = options[MENU_OPTION_TR69C];
   var omci = options[MENU_OPTION_OMCI];
   var curimg = options[MENU_OPTION_CURIMG];
   
  if(curimg != 'small')
  {
   // Configure diagnostics menu
   nodeDiagnostics = insFld(foldersTree, gFld(getMenuTitle(MENU_DIAGNOSTICS), 'diag.html'));
  }

   // Configure management menu
   nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'logintro.html'));
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SYSTEM_LOG), 'logintro.html'));
   if ( snmp == '1' )
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SNMP), 'snmpconfig.html'));
   if ( tr69c == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TR69C), 'tr69cfg.html'));
   if ( omci == '1' ) {
      nodeOmci = insFld(nodeMngr, gFld(getMenuTitle(MENU_OMCI_CFG), 'omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_SET),'omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_CREATE),'omcicreate.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_NEXT),'omcigetnext.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_MACRO),'omcimacro.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_DOWNLOAD),'omcidownload.html'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_SYSTEM),'omcisystem.html'));
   }
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_UPDATE_SOFTWARE), 'upload.html'));
}

function createBcmMenu(options) {
   var user = options[MENU_OPTION_USER];
   var proto = options[MENU_OPTION_PROTOCOL];
   var ipExt = options[MENU_OPTION_IP_EXTENSION];
   var dhcpen = options[MENU_OPTION_DHCPEN];
   var vdslIncluded = options[MENU_OPTION_VDSL];
   var mocaStats = options[MENU_OPTION_SUPPORT_MOCA];
   var sysuser = options[MENU_OPTION_SYSUSER];
   var sptuser = options[MENU_OPTION_SPTUSER];
   var usruser = options[MENU_OPTION_USRUSER];

   foldersTree = gFld('', 'info.html');
   // device info menu
   nodeDeviceInfo = insFld(foldersTree, gFld(getMenuTitle(MENU_DEVICE_INFO), 'info.html'));
   // device summary menu
   insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DEVICE_SUMMARY), 'info.html'));
   // device wan menu
   insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DEVICE_WAN), 'wancfg.cmd?action=view'));
   // device statistics menu
   nodeSts = insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_STATISTICS), 'statsifc.html'));
   insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_LAN), 'statsifc.html'));
   if (mocaStats == '1') {
      insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_MOCA), 'statsmoca.cmd?choice=LAN'));
   } else {
   insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_WAN), 'statswan.cmd'));
   insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_ATM), 'statsxtm.cmd'));
   insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_ADSL), 'statsadsl.html'));
   if (vdslIncluded == 'true')
   insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_VDSL), 'statsvdsl.html'));
   }
   // device route menu
   insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DEVICE_ROUTE), 'rtroutecfg.cmd?action=view'));
   insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_RT_ARP),'arpview.cmd'));
   // dhcp info
   if (!(ipExt == '1') && dhcpen == '1') {
      insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DHCPINFO),'dhcpinfo.html'));
   }
   if ( user == sysuser )
      menuAdmin(options);
   else if ( user == sptuser )
      menuSupport(options);
   else if ( user == usruser )
      menuUser();
   else //display all menus if there is problem with username, Apr 12, 2011
      menuAdmin(options);
}
