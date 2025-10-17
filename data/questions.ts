// Auto-generated questions data from new networking quiz questions
import { Question } from '@/types';

export const QUESTIONS_DATA: Question[] = [
  {
    "id": "q1",
    "number": 1,
    "text": "Which information is used by routers to forward a data packet toward its destination?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "destination IP address", "isCorrect": true },
      { "id": "a1", "text": "source IP address", "isCorrect": false },
      { "id": "a2", "text": "destination MAC address", "isCorrect": false },
      { "id": "a3", "text": "source MAC address", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q2",
    "number": 2,
    "text": "A computer has to send a packet to a destination host in the same LAN. How will the packet be sent?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The packet will be sent directly to the destination host.", "isCorrect": true },
      { "id": "a1", "text": "The packet will be sent to the default gateway.", "isCorrect": false },
      { "id": "a2", "text": "The packet will be broadcast to all hosts.", "isCorrect": false },
      { "id": "a3", "text": "The packet will be sent to the nearest router.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q3",
    "number": 3,
    "text": "A router receives a packet from the Gigabit 0/0 interface and determines that the packet needs to be forwarded out the Gigabit 0/1 interface. What will the router do next?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "create a new Layer 2 Ethernet frame to be sent to the destination", "isCorrect": true },
      { "id": "a1", "text": "forward the original frame unchanged", "isCorrect": false },
      { "id": "a2", "text": "drop the packet", "isCorrect": false },
      { "id": "a3", "text": "send an error message back to the source", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q4",
    "number": 4,
    "text": "Which IPv4 address can a host use to ping the loopback interface?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "127.0.0.1", "isCorrect": true },
      { "id": "a1", "text": "192.168.1.1", "isCorrect": false },
      { "id": "a2", "text": "10.0.0.1", "isCorrect": false },
      { "id": "a3", "text": "172.16.0.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q5",
    "number": 5,
    "text": "A computer can access devices on the same network but cannot access devices on other networks. What is the probable cause of this problem?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The computer has an invalid default gateway address.", "isCorrect": true },
      { "id": "a1", "text": "The computer has an invalid IP address.", "isCorrect": false },
      { "id": "a2", "text": "The computer has an invalid subnet mask.", "isCorrect": false },
      { "id": "a3", "text": "The computer has an invalid MAC address.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q6",
    "number": 6,
    "text": "Which statement describes a feature of the IP protocol?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "IP relies on upper layer services to handle situations of missing or out-of-order packets.", "isCorrect": true },
      { "id": "a1", "text": "IP guarantees delivery of packets.", "isCorrect": false },
      { "id": "a2", "text": "IP provides error correction.", "isCorrect": false },
      { "id": "a3", "text": "IP provides flow control.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q7",
    "number": 7,
    "text": "Why is NAT not needed in IPv6?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "Any host or user can get a public IPv6 network address because the number of available IPv6 addresses is extremely large.", "isCorrect": true },
      { "id": "a1", "text": "IPv6 has built-in security features.", "isCorrect": false },
      { "id": "a2", "text": "IPv6 uses private addressing only.", "isCorrect": false },
      { "id": "a3", "text": "IPv6 does not support routing.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q8",
    "number": 8,
    "text": "Which parameter does the router use to choose the path to the destination when there are multiple routes available?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "the lower metric value that is associated with the destination network", "isCorrect": true },
      { "id": "a1", "text": "the higher metric value that is associated with the destination network", "isCorrect": false },
      { "id": "a2", "text": "the first route in the routing table", "isCorrect": false },
      { "id": "a3", "text": "the last route in the routing table", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q9",
    "number": 9,
    "text": "What are two services provided by the OSI network layer? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "routing packets toward the destination", "isCorrect": true },
      { "id": "a1", "text": "encapsulating PDUs from the transport layer", "isCorrect": true },
      { "id": "a2", "text": "error detection and correction", "isCorrect": false },
      { "id": "a3", "text": "flow control", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q10",
    "number": 10,
    "text": "Within a production network, what is the purpose of configuring a switch with a default gateway address?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The default gateway address is used to forward packets originating from the switch to remote networks.", "isCorrect": true },
      { "id": "a1", "text": "The default gateway address is used to forward packets to local networks.", "isCorrect": false },
      { "id": "a2", "text": "The default gateway address is used for local switching decisions.", "isCorrect": false },
      { "id": "a3", "text": "The default gateway address is used for MAC address learning.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q11",
    "number": 11,
    "text": "What is a basic characteristic of the IP protocol?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "connectionless", "isCorrect": true },
      { "id": "a1", "text": "connection-oriented", "isCorrect": false },
      { "id": "a2", "text": "reliable", "isCorrect": false },
      { "id": "a3", "text": "guaranteed delivery", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q12",
    "number": 12,
    "text": "Which field in the IPv4 header is used to prevent a packet from traversing a network endlessly?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "Time-to-Live", "isCorrect": true },
      { "id": "a1", "text": "Header Checksum", "isCorrect": false },
      { "id": "a2", "text": "Protocol", "isCorrect": false },
      { "id": "a3", "text": "Version", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q13",
    "number": 13,
    "text": "What is one advantage that the IPv6 simplified header offers over IPv4?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "efficient packet handling", "isCorrect": true },
      { "id": "a1", "text": "smaller address space", "isCorrect": false },
      { "id": "a2", "text": "more complex routing", "isCorrect": false },
      { "id": "a3", "text": "less security", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q14",
    "number": 14,
    "text": "What IPv4 header field identifies the upper layer protocol carried in the packet?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "Protocol", "isCorrect": true },
      { "id": "a1", "text": "Version", "isCorrect": false },
      { "id": "a2", "text": "Header Length", "isCorrect": false },
      { "id": "a3", "text": "Time-to-Live", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q15",
    "number": 15,
    "text": "Refer to the exhibit. Match the packets with their destination IP address to the exiting interfaces on the router.",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "packets with destination of 172.17.6.15 -> FastEthernet0/0", "isCorrect": true },
      { "id": "a1", "text": "packets with destination of 172.17.14.8 -> FastEthernet0/1", "isCorrect": true },
      { "id": "a2", "text": "packets with destination of 172.17.12.10 -> FastEthernet1/0", "isCorrect": true },
      { "id": "a3", "text": "packets with destination of 172.17.10.5 -> FastEthernet1/1", "isCorrect": true },
      { "id": "a4", "text": "packets with destination of 172.17.8.20 -> Serial0/0/0", "isCorrect": true }
    ],
    "correctAnswers": ["a0", "a1", "a2", "a3", "a4"]
  },
  {
    "id": "q16",
    "number": 16,
    "text": "What information does the loopback test provide?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The TCP/IP stack on the device is working correctly.", "isCorrect": true },
      { "id": "a1", "text": "The network cable is working correctly.", "isCorrect": false },
      { "id": "a2", "text": "The router is working correctly.", "isCorrect": false },
      { "id": "a3", "text": "The switch is working correctly.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q17",
    "number": 17,
    "text": "What routing table entry has a next hop address associated with a destination network?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "remote routes", "isCorrect": true },
      { "id": "a1", "text": "local routes", "isCorrect": false },
      { "id": "a2", "text": "direct routes", "isCorrect": false },
      { "id": "a3", "text": "static routes", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q18",
    "number": 18,
    "text": "How do hosts ensure that their packets are directed to the correct network destination?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "They have to keep their own local routing table that contains a route to the loopback interface, a local network route, and a remote default route.", "isCorrect": true },
      { "id": "a1", "text": "They rely on the router to make all routing decisions.", "isCorrect": false },
      { "id": "a2", "text": "They use only the default gateway.", "isCorrect": false },
      { "id": "a3", "text": "They broadcast to find the destination.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q19",
    "number": 19,
    "text": "When transporting data from real-time applications, such as streaming audio and video, which field in the IPv6 header can be used to inform the routers and switches to maintain the same path for the packets in the same conversation?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "Flow Label", "isCorrect": true },
      { "id": "a1", "text": "Traffic Class", "isCorrect": false },
      { "id": "a2", "text": "Payload Length", "isCorrect": false },
      { "id": "a3", "text": "Next Header", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q20",
    "number": 20,
    "text": "What statement describes the function of the Address Resolution Protocol?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "ARP is used to discover the MAC address of any host on the local network.", "isCorrect": true },
      { "id": "a1", "text": "ARP is used to discover the IP address of any host on the local network.", "isCorrect": false },
      { "id": "a2", "text": "ARP is used to discover the MAC address of any host on remote networks.", "isCorrect": false },
      { "id": "a3", "text": "ARP is used to discover the IP address of any host on remote networks.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q21",
    "number": 21,
    "text": "Under which two circumstances will a switch flood a frame out of every port except the port that the frame was received on? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "The frame has the broadcast address as the destination address.", "isCorrect": true },
      { "id": "a1", "text": "The destination address is unknown to the switch.", "isCorrect": true },
      { "id": "a2", "text": "The frame has a unicast destination address.", "isCorrect": false },
      { "id": "a3", "text": "The frame has a multicast destination address.", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q22",
    "number": 22,
    "text": "Which statement describes the treatment of ARP requests on the local link?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "They are received and processed by every device on the local network.", "isCorrect": true },
      { "id": "a1", "text": "They are received and processed only by the target device.", "isCorrect": false },
      { "id": "a2", "text": "They are received and processed only by the router.", "isCorrect": false },
      { "id": "a3", "text": "They are received and processed only by the switch.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q23",
    "number": 23,
    "text": "Which destination address is used in an ARP request frame?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "FFFF.FFFF.FFFF", "isCorrect": true },
      { "id": "a1", "text": "0000.0000.0000", "isCorrect": false },
      { "id": "a2", "text": "1111.1111.1111", "isCorrect": false },
      { "id": "a3", "text": "AAAA.AAAA.AAAA", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q24",
    "number": 24,
    "text": "A network technician issues the arp -d * command on a PC after the router that is connected to the LAN is reconfigured. What is the result after this command is issued?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The ARP cache is cleared.", "isCorrect": true },
      { "id": "a1", "text": "The ARP cache is updated.", "isCorrect": false },
      { "id": "a2", "text": "The ARP cache is backed up.", "isCorrect": false },
      { "id": "a3", "text": "The ARP cache is restored.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q25",
    "number": 25,
    "text": "Refer to the exhibit. PC1 has sent a frame addressed to PC3. What will the switch do with the frame?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The switch will forward the frame to all ports except port 4.", "isCorrect": true },
      { "id": "a1", "text": "The switch will forward the frame only to port 4.", "isCorrect": false },
      { "id": "a2", "text": "The switch will drop the frame.", "isCorrect": false },
      { "id": "a3", "text": "The switch will broadcast the frame to all ports.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q26",
    "number": 26,
    "text": "Which two types of IPv6 messages are used in place of ARP for address resolution?",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "neighbor solicitation", "isCorrect": true },
      { "id": "a1", "text": "neighbor advertisement", "isCorrect": true },
      { "id": "a2", "text": "router solicitation", "isCorrect": false },
      { "id": "a3", "text": "router advertisement", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q27",
    "number": 27,
    "text": "What is the aim of an ARP spoofing attack?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "to associate IP addresses to the wrong MAC address", "isCorrect": true },
      { "id": "a1", "text": "to flood the network with ARP requests", "isCorrect": false },
      { "id": "a2", "text": "to prevent ARP requests from being sent", "isCorrect": false },
      { "id": "a3", "text": "to encrypt ARP messages", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q28",
    "number": 28,
    "text": "Refer to the exhibit. PC1 attempts to connect to File_server1 and sends an ARP request to obtain a destination MAC address. Which MAC address will PC1 receive in the ARP reply?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "the MAC address of the G0/0 interface on R1", "isCorrect": true },
      { "id": "a1", "text": "the MAC address of the File_server1", "isCorrect": false },
      { "id": "a2", "text": "the MAC address of the S0/0/0 interface on R1", "isCorrect": false },
      { "id": "a3", "text": "the MAC address of the G0/0 interface on R2", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q29",
    "number": 29,
    "text": "Where are IPv4 address to Layer 2 Ethernet address mappings maintained on a host computer?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "ARP cache", "isCorrect": true },
      { "id": "a1", "text": "routing table", "isCorrect": false },
      { "id": "a2", "text": "MAC address table", "isCorrect": false },
      { "id": "a3", "text": "neighbor table", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q30",
    "number": 30,
    "text": "What important information is examined in the Ethernet frame header by a Layer 2 device in order to forward the data onward?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "destination MAC address", "isCorrect": true },
      { "id": "a1", "text": "source MAC address", "isCorrect": false },
      { "id": "a2", "text": "destination IP address", "isCorrect": false },
      { "id": "a3", "text": "source IP address", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q31",
    "number": 31,
    "text": "Match the commands to the correct actions.",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "displays a message after accessing the router -> Router(config)# banner motd #", "isCorrect": true },
      { "id": "a1", "text": "provides security on the console -> Router(config-line)# password class", "isCorrect": true },
      { "id": "a2", "text": "configures a name on the router -> Router(config)# hostname CL1", "isCorrect": true }
    ],
    "correctAnswers": ["a0", "a1", "a2"]
  },
  {
    "id": "q32",
    "number": 32,
    "text": "A new network administrator has been asked to enter a banner message on a Cisco device. What is the fastest way a network administrator could test whether the banner is properly configured?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "Exit privileged EXEC mode and press Enter.", "isCorrect": true },
      { "id": "a1", "text": "Reboot the device.", "isCorrect": false },
      { "id": "a2", "text": "Use the show banner command.", "isCorrect": false },
      { "id": "a3", "text": "Use the show running-config command.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q33",
    "number": 33,
    "text": "Match the description to the access method.",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "remote access method that uses encryption -> SSH", "isCorrect": true },
      { "id": "a1", "text": "preferred out-of-band access method -> console", "isCorrect": true },
      { "id": "a2", "text": "remote access via a dialup connection -> AUX", "isCorrect": true },
      { "id": "a3", "text": "unsecure remote access -> Telnet", "isCorrect": true }
    ],
    "correctAnswers": ["a0", "a1", "a2", "a3"]
  },
  {
    "id": "q34",
    "number": 34,
    "text": "Match the phases to the functions during the boot up process of a Cisco router.",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "phase 1 -> perform the POST and load the bootstrap program", "isCorrect": true },
      { "id": "a1", "text": "phase 2 -> locate and load the Cisco IOS software", "isCorrect": true },
      { "id": "a2", "text": "phase 3 -> locate and load the startup configuration file", "isCorrect": true }
    ],
    "correctAnswers": ["a0", "a1", "a2"]
  },
  {
    "id": "q35",
    "number": 35,
    "text": "Match the command with the device mode at which the command is entered.",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "service password-encryption -> R1(config)#", "isCorrect": true },
      { "id": "a1", "text": "enable -> R1>", "isCorrect": true },
      { "id": "a2", "text": "copy running-config startup-config -> R1#", "isCorrect": true },
      { "id": "a3", "text": "login -> R1(config-line)#", "isCorrect": true },
      { "id": "a4", "text": "ip address 192.168.4.4 255.255.255.0 -> R1(config-if)#", "isCorrect": true }
    ],
    "correctAnswers": ["a0", "a1", "a2", "a3", "a4"]
  },
  {
    "id": "q36",
    "number": 36,
    "text": "What are two functions of NVRAM? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "to retain contents when power is removed", "isCorrect": true },
      { "id": "a1", "text": "to store the startup configuration file", "isCorrect": true },
      { "id": "a2", "text": "to store the running configuration", "isCorrect": false },
      { "id": "a3", "text": "to store the IOS image", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q37",
    "number": 37,
    "text": "A router boots and enters setup mode. What is the reason for this?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The configuration file is missing from NVRAM.", "isCorrect": true },
      { "id": "a1", "text": "The IOS image is missing from flash.", "isCorrect": false },
      { "id": "a2", "text": "The POST failed.", "isCorrect": false },
      { "id": "a3", "text": "The router is in ROM monitor mode.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q38",
    "number": 38,
    "text": "The global configuration command ip default-gateway 172.16.100.1 is applied to a switch. What is the effect of this command?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The switch can be remotely managed from a host on another network.", "isCorrect": true },
      { "id": "a1", "text": "The switch can forward packets to remote networks.", "isCorrect": false },
      { "id": "a2", "text": "The switch can learn MAC addresses from remote networks.", "isCorrect": false },
      { "id": "a3", "text": "The switch can act as a router.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q39",
    "number": 39,
    "text": "What happens when the transport input ssh command is entered on the switch vty lines?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "Communication between the switch and remote users is encrypted.", "isCorrect": true },
      { "id": "a1", "text": "Communication between the switch and remote users is unencrypted.", "isCorrect": false },
      { "id": "a2", "text": "Communication between the switch and remote users is blocked.", "isCorrect": false },
      { "id": "a3", "text": "Communication between the switch and remote users is authenticated only.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q40",
    "number": 40,
    "text": "Refer to the exhibit. Which IP address does the user PC target in order to forward its data off the local network?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "172.20.0.254", "isCorrect": true },
      { "id": "a1", "text": "172.20.1.1", "isCorrect": false },
      { "id": "a2", "text": "172.20.0.1", "isCorrect": false },
      { "id": "a3", "text": "172.20.1.254", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q41",
    "number": 41,
    "text": "Match the configuration mode with the command that is available in that mode.",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "R1> -> enable", "isCorrect": true },
      { "id": "a1", "text": "R1# -> copy running-config startup-config", "isCorrect": true },
      { "id": "a2", "text": "R1(config-line)# -> login", "isCorrect": true },
      { "id": "a3", "text": "R1(config)# -> interface fastethernet 0/0", "isCorrect": true }
    ],
    "correctAnswers": ["a0", "a1", "a2", "a3"]
  },
  {
    "id": "q42",
    "number": 42,
    "text": "Which three commands are used to set up secure access to a router through a connection to the console interface? (Choose three.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "line console 0", "isCorrect": true },
      { "id": "a1", "text": "password cisco", "isCorrect": true },
      { "id": "a2", "text": "login", "isCorrect": true },
      { "id": "a3", "text": "enable secret", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1", "a2"]
  },
  {
    "id": "q43",
    "number": 43,
    "text": "Refer to the exhibit. What is a description of the default gateway address?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "It is the IP address of the Router1 interface that connects the PC1 LAN to Router1.", "isCorrect": true },
      { "id": "a1", "text": "It is the IP address of the PC1.", "isCorrect": false },
      { "id": "a2", "text": "It is the IP address of the Router2 interface.", "isCorrect": false },
      { "id": "a3", "text": "It is the IP address of the switch.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q44",
    "number": 44,
    "text": "Which two functions are primary functions of a router? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "path selection", "isCorrect": true },
      { "id": "a1", "text": "packet forwarding", "isCorrect": true },
      { "id": "a2", "text": "MAC address learning", "isCorrect": false },
      { "id": "a3", "text": "frame switching", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q45",
    "number": 45,
    "text": "What is the effect of using the Router# copy running-config startup-config command on a router?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The contents of NVRAM will change.", "isCorrect": true },
      { "id": "a1", "text": "The contents of RAM will change.", "isCorrect": false },
      { "id": "a2", "text": "The contents of flash will change.", "isCorrect": false },
      { "id": "a3", "text": "The contents of ROM will change.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q46",
    "number": 46,
    "text": "What will happen if the default gateway address is incorrectly configured on a host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The host cannot communicate with hosts in other networks.", "isCorrect": true },
      { "id": "a1", "text": "The host cannot communicate with hosts in the same network.", "isCorrect": false },
      { "id": "a2", "text": "The host cannot communicate with any hosts.", "isCorrect": false },
      { "id": "a3", "text": "The host can communicate with all hosts.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q47",
    "number": 47,
    "text": "What are two potential network problems that can result from ARP operation? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "On large networks with low bandwidth, multiple ARP broadcasts could cause data communication delays.", "isCorrect": true },
      { "id": "a1", "text": "Network attackers could manipulate MAC address and IP address mappings in ARP messages with the intent of intercepting network traffic.", "isCorrect": true },
      { "id": "a2", "text": "ARP requests are always successful.", "isCorrect": false },
      { "id": "a3", "text": "ARP provides security for network communications.", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q48",
    "number": 48,
    "text": "Open the PT activity. Which interfaces in each router are active and operational?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "R1: G0/0 and S0/0/0, R2: G0/1 and S0/0/0", "isCorrect": true },
      { "id": "a1", "text": "R1: G0/1 and S0/0/0, R2: G0/0 and S0/0/0", "isCorrect": false },
      { "id": "a2", "text": "R1: G0/0 and G0/1, R2: S0/0/0 and S0/0/1", "isCorrect": false },
      { "id": "a3", "text": "R1: S0/0/0 and S0/0/1, R2: G0/0 and G0/1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q49",
    "number": 49,
    "text": "Which term describes a field in the IPv4 packet header used to identify the next level protocol?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "protocol", "isCorrect": true },
      { "id": "a1", "text": "version", "isCorrect": false },
      { "id": "a2", "text": "header length", "isCorrect": false },
      { "id": "a3", "text": "time-to-live", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q50",
    "number": 50,
    "text": "Which term describes a field in the IPv4 packet header that contains an 8-bit binary value used to determine the priority of each packet?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "differentiated services", "isCorrect": true },
      { "id": "a1", "text": "protocol", "isCorrect": false },
      { "id": "a2", "text": "time-to-live", "isCorrect": false },
      { "id": "a3", "text": "header checksum", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q51",
    "number": 51,
    "text": "Which term describes a field in the IPv4 packet header that contains a 32-bit binary value associated with an interface on the sending device?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "source IPv4 address", "isCorrect": true },
      { "id": "a1", "text": "destination IPv4 address", "isCorrect": false },
      { "id": "a2", "text": "protocol", "isCorrect": false },
      { "id": "a3", "text": "time-to-live", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q52",
    "number": 52,
    "text": "Which term describes a field in the IPv4 packet header used to detect corruption in the IPv4 header?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "header checksum", "isCorrect": true },
      { "id": "a1", "text": "protocol", "isCorrect": false },
      { "id": "a2", "text": "time-to-live", "isCorrect": false },
      { "id": "a3", "text": "version", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q53",
    "number": 53,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Payroll LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "10.27.14.148", "isCorrect": true },
      { "id": "a1", "text": "10.27.14.1", "isCorrect": false },
      { "id": "a2", "text": "10.27.14.255", "isCorrect": false },
      { "id": "a3", "text": "10.27.15.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q54",
    "number": 54,
    "text": "Which term describes a field in the IPv4 packet header that contains a unicast, multicast, or broadcast address?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "destination IPv4 address", "isCorrect": true },
      { "id": "a1", "text": "source IPv4 address", "isCorrect": false },
      { "id": "a2", "text": "protocol", "isCorrect": false },
      { "id": "a3", "text": "time-to-live", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q55",
    "number": 55,
    "text": "Which term describes a field in the IPv4 packet header used to limit the lifetime of a packet?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "TTL", "isCorrect": true },
      { "id": "a1", "text": "protocol", "isCorrect": false },
      { "id": "a2", "text": "header checksum", "isCorrect": false },
      { "id": "a3", "text": "version", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q56",
    "number": 56,
    "text": "Which term describes a field in the IPv4 packet header that contains a 4-bit binary value set to 0100?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "version", "isCorrect": true },
      { "id": "a1", "text": "protocol", "isCorrect": false },
      { "id": "a2", "text": "header length", "isCorrect": false },
      { "id": "a3", "text": "time-to-live", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q57",
    "number": 57,
    "text": "What property of ARP causes cached IP-to-MAC mappings to remain in memory longer?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "A static IP-to-MAC address entry can be entered manually into an ARP table.", "isCorrect": true },
      { "id": "a1", "text": "ARP entries are automatically refreshed.", "isCorrect": false },
      { "id": "a2", "text": "ARP entries never expire.", "isCorrect": false },
      { "id": "a3", "text": "ARP entries are cached indefinitely.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q58",
    "number": 58,
    "text": "What property of ARP allows MAC addresses of frequently used servers to be fixed in the ARP table?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "A static IP-to-MAC address entry can be entered manually into an ARP table.", "isCorrect": true },
      { "id": "a1", "text": "ARP automatically learns all MAC addresses.", "isCorrect": false },
      { "id": "a2", "text": "ARP broadcasts all MAC addresses.", "isCorrect": false },
      { "id": "a3", "text": "ARP caches all MAC addresses permanently.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q59",
    "number": 59,
    "text": "What property of ARP allows hosts on a LAN to send traffic to remote networks?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "Local hosts learn the MAC address of the default gateway.", "isCorrect": true },
      { "id": "a1", "text": "Local hosts learn the IP address of the default gateway.", "isCorrect": false },
      { "id": "a2", "text": "Local hosts learn the MAC address of remote hosts.", "isCorrect": false },
      { "id": "a3", "text": "Local hosts learn the IP address of remote hosts.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q60",
    "number": 60,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Registrar LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "192.168.235.234", "isCorrect": true },
      { "id": "a1", "text": "192.168.235.1", "isCorrect": false },
      { "id": "a2", "text": "192.168.235.255", "isCorrect": false },
      { "id": "a3", "text": "192.168.236.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q61",
    "number": 61,
    "text": "What property of ARP forces all Ethernet NICs to process an ARP request?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.", "isCorrect": true },
      { "id": "a1", "text": "The source MAC address appears in the header of the Ethernet frame.", "isCorrect": false },
      { "id": "a2", "text": "The protocol type 0x806 appears in the header of the Ethernet frame.", "isCorrect": false },
      { "id": "a3", "text": "The frame length appears in the header of the Ethernet frame.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q62",
    "number": 62,
    "text": "What property of ARP causes a reply only to the source sending an ARP request?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The source MAC address appears in the header of the Ethernet frame.", "isCorrect": true },
      { "id": "a1", "text": "The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.", "isCorrect": false },
      { "id": "a2", "text": "The protocol type 0x806 appears in the header of the Ethernet frame.", "isCorrect": false },
      { "id": "a3", "text": "The frame length appears in the header of the Ethernet frame.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q63",
    "number": 63,
    "text": "What property of ARP causes the request to be flooded out all ports of a switch except for the port receiving the ARP request?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.", "isCorrect": true },
      { "id": "a1", "text": "The source MAC address appears in the header of the Ethernet frame.", "isCorrect": false },
      { "id": "a2", "text": "The protocol type 0x806 appears in the header of the Ethernet frame.", "isCorrect": false },
      { "id": "a3", "text": "The frame length appears in the header of the Ethernet frame.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q64",
    "number": 64,
    "text": "What property of ARP causes the NICs receiving an ARP request to pass the data portion of the Ethernet frame to the ARP process?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The type field 0x806 appears in the header of the Ethernet frame.", "isCorrect": true },
      { "id": "a1", "text": "The destination MAC address FF-FF-FF-FF-FF-FF appears in the header of the Ethernet frame.", "isCorrect": false },
      { "id": "a2", "text": "The source MAC address appears in the header of the Ethernet frame.", "isCorrect": false },
      { "id": "a3", "text": "The frame length appears in the header of the Ethernet frame.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q65",
    "number": 65,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Service LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "172.29.157.156", "isCorrect": true },
      { "id": "a1", "text": "172.29.157.1", "isCorrect": false },
      { "id": "a2", "text": "172.29.157.255", "isCorrect": false },
      { "id": "a3", "text": "172.29.158.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q66",
    "number": 66,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Medical LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "192.168.191.189", "isCorrect": true },
      { "id": "a1", "text": "192.168.191.1", "isCorrect": false },
      { "id": "a2", "text": "192.168.191.255", "isCorrect": false },
      { "id": "a3", "text": "192.168.192.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q67",
    "number": 67,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Registrar LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "192.168.225.223", "isCorrect": true },
      { "id": "a1", "text": "192.168.225.1", "isCorrect": false },
      { "id": "a2", "text": "192.168.225.255", "isCorrect": false },
      { "id": "a3", "text": "192.168.226.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q68",
    "number": 68,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Manager LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "10.118.62.196", "isCorrect": true },
      { "id": "a1", "text": "10.118.62.1", "isCorrect": false },
      { "id": "a2", "text": "10.118.62.255", "isCorrect": false },
      { "id": "a3", "text": "10.118.63.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q69",
    "number": 69,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Store LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "172.19.98.230", "isCorrect": true },
      { "id": "a1", "text": "172.19.98.1", "isCorrect": false },
      { "id": "a2", "text": "172.19.98.255", "isCorrect": false },
      { "id": "a3", "text": "172.19.99.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q70",
    "number": 70,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Store LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "172.20.132.13", "isCorrect": true },
      { "id": "a1", "text": "172.20.132.1", "isCorrect": false },
      { "id": "a2", "text": "172.20.132.255", "isCorrect": false },
      { "id": "a3", "text": "172.20.133.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q71",
    "number": 71,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Service LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "192.168.167.166", "isCorrect": true },
      { "id": "a1", "text": "192.168.167.1", "isCorrect": false },
      { "id": "a2", "text": "192.168.167.255", "isCorrect": false },
      { "id": "a3", "text": "192.168.168.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q72",
    "number": 72,
    "text": "Refer to the exhibit. A network administrator is connecting a new host to the Medical LAN. The host needs to communicate with remote networks. What IP address would be configured as the default gateway on the new host?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "192.168.201.200", "isCorrect": true },
      { "id": "a1", "text": "192.168.201.1", "isCorrect": false },
      { "id": "a2", "text": "192.168.201.255", "isCorrect": false },
      { "id": "a3", "text": "192.168.202.1", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  }
];

export default QUESTIONS_DATA;