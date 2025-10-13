// Auto-generated questions data from CCNA1 4-7 gimkit.odt
import { Question } from '@/types';

export const QUESTIONS_DATA: Question[] = [
  {
    "id": "q1",
    "number": 1,
    "text": "What is the purpose of the OSI physical layer?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "transmitting bits across the local media", "isCorrect": true },
      { "id": "a1", "text": "controlling access to media", "isCorrect": false },
      { "id": "a2", "text": "performing error detection on received frames", "isCorrect": false },
      { "id": "a3", "text": "exchanging frames between nodes over physical network media", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q2",
    "number": 2,
    "text": "Why are two strands of fiber used for a single fiber optic connection?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "They allow for full-duplex connectivity.", "isCorrect": true },
      { "id": "a1", "text": "The two strands allow the data to travel for longer distances without degrading.", "isCorrect": false },
      { "id": "a2", "text": "They prevent crosstalk from causing interference on the connection.", "isCorrect": false },
      { "id": "a3", "text": "They increase the speed at which the data can travel.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q3",
    "number": 3,
    "text": "Which characteristic describes crosstalk?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "the distortion of the transmitted messages from signals carried in adjacent wires", "isCorrect": true },
      { "id": "a1", "text": "the distortion of the network signal from fluorescent lighting", "isCorrect": false },
      { "id": "a2", "text": "the weakening of the network signal over long cable lengths", "isCorrect": false },
      { "id": "a3", "text": "the loss of wireless signal over excessive distance from the access point", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q4",
    "number": 4,
    "text": "Which procedure is used to reduce the effect of crosstalk in copper cables?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "twisting opposing circuit wire pairs together", "isCorrect": true },
      { "id": "a1", "text": "requiring proper grounding connections", "isCorrect": false },
      { "id": "a2", "text": "wrapping the bundle of wires with metallic shielding", "isCorrect": false },
      { "id": "a3", "text": "designing a cable infrastructure to avoid crosstalk interference", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q5",
    "number": 5,
    "text": "A network administrator is measuring the transfer of bits across the company backbone for a mission critical financial application. The administrator notices that the network throughput appears lower than the bandwidth expected. Which three factors could influence the differences in throughput? (Choose three.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "the amount of traffic that is currently crossing the network", "isCorrect": true },
      { "id": "a1", "text": "the type of traffic that is crossing the network", "isCorrect": true },
      { "id": "a2", "text": "the latency that is created by the number of network devices that the data is crossing", "isCorrect": true },
      { "id": "a3", "text": "the sophistication of the encapsulation method applied to the data", "isCorrect": false },
      { "id": "a4", "text": "the bandwidth of the WAN connection to the Internet", "isCorrect": false },
      { "id": "a5", "text": "the reliability of the gigabit Ethernet infrastructure of the backbone", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1", "a2"]
  },
  {
    "id": "q6",
    "number": 6,
    "text": "What are two characteristics of fiber-optic cable? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "It is not affected by EMI or RFI.", "isCorrect": true },
      { "id": "a1", "text": "It is more expensive than UTP cabling is.", "isCorrect": true },
      { "id": "a2", "text": "Each pair of cables is wrapped in metallic foil.", "isCorrect": false },
      { "id": "a3", "text": "It combines the technique of cancellation, shielding, and twisting to protect data.", "isCorrect": false },
      { "id": "a4", "text": "It typically contains 4 pairs of fiber-optic wires.", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q7",
    "number": 7,
    "text": "What is a primary role of the Physical layer in transmitting data on the network?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "create the signals that represent the bits in each frame on to the media", "isCorrect": true },
      { "id": "a1", "text": "provide physical addressing to the devices", "isCorrect": false },
      { "id": "a2", "text": "determine the path packets take through the network", "isCorrect": false },
      { "id": "a3", "text": "control data access to the media", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q8",
    "number": 8,
    "text": "With the use of unshielded twisted-pair copper wire in a network, what causes crosstalk within the cable pairs?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "the magnetic field around the adjacent pairs of wire", "isCorrect": true },
      { "id": "a1", "text": "the use of braided wire to shield the adjacent wire pairs", "isCorrect": false },
      { "id": "a2", "text": "the reflection of the electrical wave back from the far end of the cable", "isCorrect": false },
      { "id": "a3", "text": "the collision caused by two nodes trying to use the media simultaneously", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q9",
    "number": 9,
    "text": "Refer to the graphic. What type of cabling is shown? *! fiber",
    "type": "single",
    "answers": [
        { "id": "a0", "text": "fiber", "isCorrect": true },
        { "id": "a1", "text": "STP", "isCorrect": false },
        { "id": "a2", "text": "UTP", "isCorrect": false },
        { "id": "a3", "text": "coax", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q10",
    "number": 10,
    "text": "In addition to the cable length, what two factors could interfere with the communication carried over UTP cables? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "crosstalk", "isCorrect": true },
      { "id": "a1", "text": "electromagnetic interference", "isCorrect": true },
      { "id": "a2", "text": "bandwidth", "isCorrect": false },
      { "id": "a3", "text": "size of the network", "isCorrect": false },
      { "id": "a4", "text": "signal modulation technique", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q11",
    "number": 11,
    "text": "Refer to the graphic. What type of cabling is shown? * ! UTP",
    "type": "single",
    "answers": [
        { "id": "a0", "text": "UTP", "isCorrect": true },
        { "id": "a1", "text": "STP", "isCorrect": false },
        { "id": "a2", "text": "coax", "isCorrect": false },
        { "id": "a3", "text": "fiber", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q12",
    "number": 12,
    "text": "Which two devices commonly affect wireless networks? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "cordless phones", "isCorrect": true },
      { "id": "a1", "text": "microwaves", "isCorrect": true },
      { "id": "a2", "text": "Blu-ray players", "isCorrect": false },
      { "id": "a3", "text": "home theaters", "isCorrect": false },
      { "id": "a4", "text": "incandescent light bulbs", "isCorrect": false },
      { "id": "a5", "text": "external hard drives", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q13",
    "number": 13,
    "text": "Which two statements describe the services provided by the data link layer? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "It manages the access of frames to the network media.", "isCorrect": true },
      { "id": "a1", "text": "It packages various Layer 3 PDUs into a frame format that is compatible with the network interface.", "isCorrect": true },
      { "id": "a2", "text": "It defines the end-to-end delivery addressing scheme.", "isCorrect": false },
      { "id": "a3", "text": "It maintains the path between the source and destination devices during the data transmission.", "isCorrect": false },
      { "id": "a4", "text": "It provides reliable delivery through link establishment and flow control.", "isCorrect": false },
      { "id": "a5", "text": "It ensures that application data will be transmitted according to the prioritization.", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q14",
    "number": 14,
    "text": "What is the function of the CRC value that is found in the FCS field of a frame?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "to verify the integrity of the received frame", "isCorrect": true },
      { "id": "a1", "text": "to verify the physical address in the frame", "isCorrect": false },
      { "id": "a2", "text": "to verify the logical address in the frame", "isCorrect": false },
      { "id": "a3", "text": "to compute the checksum header for the data field in the frame", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q15",
    "number": 15,
    "text": "What is contained in the trailer of a data-link frame?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "error detection", "isCorrect": true },
      { "id": "a1", "text": "logical address", "isCorrect": false },
      { "id": "a2", "text": "physical address", "isCorrect": false },
      { "id": "a3", "text": "data", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q16",
    "number": 16,
    "text": "Which statement describes a characteristic of the frame header fields of the data link layer?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "They vary depending on protocols.", "isCorrect": true },
      { "id": "a1", "text": "They all include the flow control and logical connection fields.", "isCorrect": false },
      { "id": "a2", "text": "Ethernet frame header fields contain Layer 3 source and destination addresses.", "isCorrect": false },
      { "id": "a3", "text": "They include information on user applications.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q17",
    "number": 17,
    "text": "A network team is comparing physical WAN topologies for connecting remote sites to a headquarters building. Which topology provides high availability and connects some, but not all, remote sites?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "partial mesh", "isCorrect": true },
      { "id": "a1", "text": "mesh", "isCorrect": false },
      { "id": "a2", "text": "hub and spoke", "isCorrect": false },
      { "id": "a3", "text": "point-to-point", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q18",
    "number": 18,
    "text": "Which two fields or features does Ethernet examine to determine if a received frame is passed to the data link layer or discarded by the NIC? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "Frame Check Sequence", "isCorrect": true },
      { "id": "a1", "text": "minimum frame size", "isCorrect": true },
      { "id": "a2", "text": "auto-MDIX", "isCorrect": false },
      { "id": "a3", "text": "CEF", "isCorrect": false },
      { "id": "a4", "text": "source MAC address", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q19",
    "number": 19,
    "text": "Which media communication type does not require media arbitration in the data link layer?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "full-duplex", "isCorrect": true },
      { "id": "a1", "text": "deterministic", "isCorrect": false },
      { "id": "a2", "text": "half-duplex", "isCorrect": false },
      { "id": "a3", "text": "controlled access", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q20",
    "number": 20,
    "text": "Which statement describes an extended star topology?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "End devices connect to a central intermediate device, which in turn connects to other central intermediate devices.", "isCorrect": true },
      { "id": "a1", "text": "End devices are connected together by a bus and each bus connects to a central intermediate device.", "isCorrect": false },
      { "id": "a2", "text": "Each end system is connected to its respective neighbor via an intermediate device.", "isCorrect": false },
      { "id": "a3", "text": "All end and intermediate devices are connected in a chain to each other.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q21",
    "number": 21,
    "text": "What is a characteristic of the LLC sublayer?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "It places information in the frame allowing multiple Layer 3 protocols to use the same network interface and media.", "isCorrect": true },
      { "id": "a1", "text": "It provides the logical addressing required that identifies the device.", "isCorrect": false },
      { "id": "a2", "text": "It provides delimitation of data according to the physical signaling requirements of the medium.", "isCorrect": false },
      { "id": "a3", "text": "It defines software processes that provide services to the physical layer.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q22",
    "number": 22,
    "text": "What are three ways that media access control is used in networking? (Choose three.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "Ethernet utilizes CSMA/CD.", "isCorrect": true },
      { "id": "a1", "text": "Media access control provides placement of data frames onto the media.", "isCorrect": true },
      { "id": "a2", "text": "Data link layer protocols define the rules for access to different media.", "isCorrect": true },
      { "id": "a3", "text": "Contention-based access is also known as deterministic.", "isCorrect": false },
      { "id": "a4", "text": "802.11 utilizes CSMA/CD.", "isCorrect": false },
      { "id": "a5", "text": "Networks with controlled access have reduced performance due to data collisions.", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1", "a2"]
  },
  {
    "id": "q23",
    "number": 23,
    "text": "During the encapsulation process, what occurs at the data link layer for a PC connected to an Ethernet network?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The physical address is added.", "isCorrect": true },
      { "id": "a1", "text": "An IP address is added.", "isCorrect": false },
      { "id": "a2", "text": "The logical address is added.", "isCorrect": false },
      { "id": "a3", "text": "The process port number is added.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q24",
    "number": 24,
    "text": "What three items are contained in an Ethernet header and trailer? (Choose three.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "source MAC address", "isCorrect": true },
      { "id": "a1", "text": "destination MAC address", "isCorrect": true },
      { "id": "a2", "text": "error-checking information", "isCorrect": true },
      { "id": "a3", "text": "source IP address", "isCorrect": false },
      { "id": "a4", "text": "destination IP address", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1", "a2"]
  },
  {
    "id": "q25",
    "number": 25,
    "text": "What type of communication rule would best describe CSMA/CD?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "access method", "isCorrect": true },
      { "id": "a1", "text": "flow control", "isCorrect": false },
      { "id": "a2", "text": "message encapsulation", "isCorrect": false },
      { "id": "a3", "text": "message encoding", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q26",
    "number": 26,
    "text": "Which three basic parts are common to all frame types supported by the data link layer? (Choose three.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "header", "isCorrect": true },
      { "id": "a1", "text": "data", "isCorrect": true },
      { "id": "a2", "text": "trailer", "isCorrect": true },
      { "id": "a3", "text": "type field", "isCorrect": false },
      { "id": "a4", "text": "MTU size", "isCorrect": false },
      { "id": "a5", "text": "CRC value", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1", "a2"]
  },
  {
    "id": "q27",
    "number": 27,
    "text": "Which statement is true about the CSMA/CD access method that is used in Ethernet?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "All network devices must listen before transmitting.", "isCorrect": true },
      { "id": "a1", "text": "When a device hears a carrier signal and transmits, a collision cannot occur.", "isCorrect": false },
      { "id": "a2", "text": "A jamming signal causes only devices that caused the collision to execute a backoff algorithm.", "isCorrect": false },
      { "id": "a3", "text": "Devices involved in a collision get priority to transmit after the backoff period.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q28",
    "number": 28,
    "text": "What is the auto-MDIX feature on a switch?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "the automatic configuration of an interface for a straight-through or a crossover Ethernet cable connection", "isCorrect": true },
      { "id": "a1", "text": "the automatic configuration of an interface for 10/100/1000 Mb/s operation", "isCorrect": false },
      { "id": "a2", "text": "the automatic configuration of full-duplex operation over a single Ethernet copper or optical cable", "isCorrect": false },
      { "id": "a3", "text": "the ability to turn a switch interface on or off accordingly if an active connection is detected", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q29",
    "number": 29,
    "text": "Refer to the exhibit. What is the destination MAC address of the Ethernet frame as it leaves the web server if the final destination is PC1? [Image shows a Web Server (192.168.5.10, MAC: 00-60-2F-3A-07-DD) connected through a switch and two routers to PC1 (192.168.1.50, MAC: 00-60-2F-3A-07-AA). The router interface connected to the web server's network is Fa0/0 (192.168.5.1, MAC: 00-60-2F-3A-07-CC).]",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "00-60-2F-3A-07-CC", "isCorrect": true },
      { "id": "a1", "text": "00-60-2F-3A-07-AA", "isCorrect": false },
      { "id": "a2", "text": "00-60-2F-3A-07-BB", "isCorrect": false },
      { "id": "a3", "text": "00-60-2F-3A-07-DD", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q30",
    "number": 30,
    "text": "A Layer 2 switch is used to switch incoming frames from a 1000BASE-T port to a port connected to a 100Base-T network. Which method of memory buffering would work best for this task?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "shared memory buffering", "isCorrect": true },
      { "id": "a1", "text": "port-based buffering", "isCorrect": false },
      { "id": "a2", "text": "level 1 cache buffering", "isCorrect": false },
      { "id": "a3", "text": "fixed configuration buffering", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q31",
    "number": 31,
    "text": "What are two examples of the cut-through switching method? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "fast-forward switching", "isCorrect": true },
      { "id": "a1", "text": "fragment-free switching", "isCorrect": true },
      { "id": "a2", "text": "store-and-forward switching", "isCorrect": false },
      { "id": "a3", "text": "CRC switching", "isCorrect": false },
      { "id": "a4", "text": "QOS switching", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q32",
    "number": 32,
    "text": "Which frame forwarding method receives the entire frame and performs a CRC check to detect errors before forwarding the frame?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "store-and-forward switching", "isCorrect": true },
      { "id": "a1", "text": "cut-through switching", "isCorrect": false },
      { "id": "a2", "text": "fragment-free switching", "isCorrect": false },
      { "id": "a3", "text": "fast-forward switching", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q33",
    "number": 33,
    "text": "What is the purpose of the FCS field in a frame?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "to determine if errors occurred in the transmission and reception", "isCorrect": true },
      { "id": "a1", "text": "to obtain the MAC address of the sending node", "isCorrect": false },
      { "id": "a2", "text": "to verify the logical address of the sending node", "isCorrect": false },
      { "id": "a3", "text": "to compute the CRC header for the data field", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q34",
    "number": 34,
    "text": "Which switching method has the lowest level of latency?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "fast-forward", "isCorrect": true },
      { "id": "a1", "text": "cut-through", "isCorrect": false },
      { "id": "a2", "text": "store-and-forward", "isCorrect": false },
      { "id": "a3", "text": "fragment-free", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q35",
    "number": 35,
    "text": "A network administrator is connecting two modern switches using a straight-through cable. The switches are new and have never been configured. Which three statements are correct about the final result of the connection? (Choose three.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "The link between the switches will work at the fastest speed that is supported by both switches.", "isCorrect": true },
      { "id": "a1", "text": "The link between switches will work as full-duplex.", "isCorrect": true },
      { "id": "a2", "text": "The auto-MDIX feature will configure the interfaces eliminating the need for a crossover cable.", "isCorrect": true },
      { "id": "a3", "text": "If both switches support different speeds, they will each work at their own fastest speed.", "isCorrect": false },
      { "id": "a4", "text": "The connection will not be possible unless the administrator changes the cable to a crossover cable.", "isCorrect": false },
      { "id": "a5", "text": "The duplex capability has to be manually configured because it cannot be negotiated.", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1", "a2"]
  },
  {
    "id": "q36",
    "number": 36,
    "text": "Which advantage does the store-and-forward switching method have compared with the cut-through switching method?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "frame error checking", "isCorrect": true },
      { "id": "a1", "text": "collision detecting", "isCorrect": false },
      { "id": "a2", "text": "faster frame forwarding", "isCorrect": false },
      { "id": "a3", "text": "frame forwarding using IPv4 Layer 3 and 4 information", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q37",
    "number": 37,
    "text": "When the store-and-forward method of switching is in use, what part of the Ethernet frame is used to perform an error check?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "CRC in the trailer", "isCorrect": true },
      { "id": "a1", "text": "source MAC address in the header", "isCorrect": false },
      { "id": "a2", "text": "destination MAC address in the header", "isCorrect": false },
      { "id": "a3", "text": "protocol type in the header", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q38",
    "number": 38,
    "text": "Which switching method uses the CRC value in a frame?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "store-and-forward", "isCorrect": true },
      { "id": "a1", "text": "cut-through", "isCorrect": false },
      { "id": "a2", "text": "fast-forward", "isCorrect": false },
      { "id": "a3", "text": "fragment-free", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q39",
    "number": 39,
    "text": "What are two actions performed by a Cisco switch? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "using the source MAC addresses of frames to build and maintain a MAC address table", "isCorrect": true },
      { "id": "a1", "text": "utilizing the MAC address table to forward frames via the destination MAC address", "isCorrect": true },
      { "id": "a2", "text": "building a routing table that is based on the first IP address in the frame header", "isCorrect": false },
      { "id": "a3", "text": "forwarding frames with unknown destination IP addresses to the default gateway", "isCorrect": false },
      { "id": "a4", "text": "examining the destination MAC address to add new entries to the MAC address table", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q40",
    "number": 40,
    "text": "Which two statements describe features or functions of the logical link control sublayer in Ethernet standards? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "Logical link control is implemented in software.", "isCorrect": true },
      { "id": "a1", "text": "The data link layer uses LLC to communicate with the upper layers of the protocol suite.", "isCorrect": true },
      { "id": "a2", "text": "Logical link control is specified in the IEEE 802.3 standard.", "isCorrect": false },
      { "id": "a3", "text": "The LLC sublayer adds a header and a trailer to the data.", "isCorrect": false },
      { "id": "a4", "text": "The LLC sublayer is responsible for the placement and retrieval of frames on and off the media.", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q41",
    "number": 41,
    "text": "What is the auto-MDIX feature?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "It enables a device to automatically configure an interface to use a straight-through or a crossover cable.", "isCorrect": true },
      { "id": "a1", "text": "It enables a device to automatically configure the duplex settings of a segment.", "isCorrect": false },
      { "id": "a2", "text": "It enables a device to automatically configure the speed of its interface.", "isCorrect": false },
      { "id": "a3", "text": "It enables a switch to dynamically select the forwarding method.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q42",
    "number": 42,
    "text": "What is one advantage of using the cut-through switching method instead of the store-and-forward switching method?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "has a lower latency appropriate for high-performance computing applications", "isCorrect": true },
      { "id": "a1", "text": "has a positive impact on bandwidth by dropping most of the invalid frames", "isCorrect": false },
      { "id": "a2", "text": "makes a fast forwarding decision based on the source MAC address of the frame", "isCorrect": false },
      { "id": "a3", "text": "provides the flexibility to support any mix of Ethernet speeds", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q43",
    "number": 43,
    "text": "Which is a multicast MAC address?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "01-00-5E-00-00-03", "isCorrect": true },
      { "id": "a1", "text": "FF-FF-FF-FF-FF-FF", "isCorrect": false },
      { "id": "a2", "text": "5C-26-0A-4B-19-3E", "isCorrect": false },
      { "id": "a3", "text": "00-26-0F-4B-00-3E", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q44",
    "number": 44,
    "text": "Refer to the exhibit. What is wrong with the displayed termination? [Image shows an RJ-45 connector where the cable jacket ends well before the crimp point, leaving an excessive length of untwisted wires exposed.]",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The untwisted length of each wire is too long.", "isCorrect": true },
      { "id": "a1", "text": "The woven copper braid should not have been removed.", "isCorrect": false },
      { "id": "a2", "text": "The wrong type of connector is being used.", "isCorrect": false },
      { "id": "a3", "text": "The wires are too thick for the connector that is used.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q45",
    "number": 45,
    "text": "Refer to the exhibit. The PC is connected to the console port of the switch. All the other connections are made through FastEthernet links. Which types of UTP cables can be used to connect the devices? [Image shows a PC connected to a Switch (link 1), which is connected to a Router (link 2), which is connected to another Router (link 3). The PC-Switch link is specified as the console port.]",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "1 - rollover, 2 - straight-through, 3 - crossover", "isCorrect": true },
      { "id": "a1", "text": "1 - rollover, 2 - crossover, 3 - straight-through", "isCorrect": false },
      { "id": "a2", "text": "1 - crossover, 2 - rollover, 3 - straight-through", "isCorrect": false },
      { "id": "a3", "text": "1 - crossover, 2 - straight-through, 3 - rollover", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q46",
    "number": 46,
    "text": "What does the term \"attenuation\" mean in data communication?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "loss of signal strength as distance increases", "isCorrect": true },
      { "id": "a1", "text": "time for a signal to reach its destination", "isCorrect": false },
      { "id": "a2", "text": "leakage of signals from one cable pair to another", "isCorrect": false },
      { "id": "a3", "text": "strengthening of a signal by a networking device", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q47",
    "number": 47,
    "text": "What makes fiber preferable to copper cabling for interconnecting buildings? (Choose three.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "greater distances per cable run", "isCorrect": true },
      { "id": "a1", "text": "limited susceptibility to EMI/RFI", "isCorrect": true },
      { "id": "a2", "text": "greater bandwidth potential", "isCorrect": true },
      { "id": "a3", "text": "lower installation cost", "isCorrect": false },
      { "id": "a4", "text": "durable connections", "isCorrect": false },
      { "id": "a5", "text": "easily terminated", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1", "a2"]
  },
  {
    "id": "q48",
    "number": 48,
    "text": "What OSI physical layer term describes the process by which one wave modifies another wave?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "modulation", "isCorrect": true },
      { "id": "a1", "text": "IEEE", "isCorrect": false },
      { "id": "a2", "text": "EIA/TIA", "isCorrect": false },
      { "id": "a3", "text": "air", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q49",
    "number": 49,
    "text": "What OSI physical layer term describes the capacity at which a medium can carry data?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "bandwidth", "isCorrect": true },
      { "id": "a1", "text": "IEEE", "isCorrect": false },
      { "id": "a2", "text": "EIA/TIA", "isCorrect": false },
      { "id": "a3", "text": "air", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q50",
    "number": 50,
    "text": "What OSI physical layer term describes the measure of the transfer of bits across a medium over a given period of time?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "throughput", "isCorrect": true },
      { "id": "a1", "text": "bandwidth", "isCorrect": false },
      { "id": "a2", "text": "latency", "isCorrect": false },
      { "id": "a3", "text": "goodput", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q51",
    "number": 51,
    "text": "What OSI physical layer term describes the amount of time, including delays, for data to travel from one point to another?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "latency", "isCorrect": true },
      { "id": "a1", "text": "bandwidth", "isCorrect": false },
      { "id": "a2", "text": "throughput", "isCorrect": false },
      { "id": "a3", "text": "goodput", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q52",
    "number": 52,
    "text": "What OSI physical layer term describes the measure of usable data transferred over a given period of time?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "goodput", "isCorrect": true },
      { "id": "a1", "text": "fiber-optic cable", "isCorrect": false },
      { "id": "a2", "text": "air", "isCorrect": false },
      { "id": "a3", "text": "copper cable", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q53",
    "number": 53,
    "text": "What OSI physical layer term describes the physical medium which uses electrical pulses?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "copper cable", "isCorrect": true },
      { "id": "a1", "text": "fiber-optic cable", "isCorrect": false },
      { "id": "a2", "text": "air", "isCorrect": false },
      { "id": "a3", "text": "goodput", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q54",
    "number": 54,
    "text": "What OSI physical layer term describes the physical medium that uses the propagation of light?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "fiber-optic cable", "isCorrect": true },
      { "id": "a1", "text": "goodput", "isCorrect": false },
      { "id": "a2", "text": "latency", "isCorrect": false },
      { "id": "a3", "text": "throughput", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q55",
    "number": 55,
    "text": "What OSI physical layer term describes the physical medium for microwave transmissions?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "air", "isCorrect": true },
      { "id": "a1", "text": "goodput", "isCorrect": false },
      { "id": "a2", "text": "latency", "isCorrect": false },
      { "id": "a3", "text": "throughput", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q56",
    "number": 56,
    "text": "Which two functions are performed at the MAC sublayer of the OSI data link layer? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "Adds Layer 2 control information to network protocol data.", "isCorrect": true },
      { "id": "a1", "text": "Controls the NIC responsible for sending and receiving data on the physical medium.", "isCorrect": true },
      { "id": "a2", "text": "Places information in the frame that identifies which network layer protocol is being used for the frame.", "isCorrect": false },
      { "id": "a3", "text": "Implements a trailer to detect transmission errors.", "isCorrect": false },
      { "id": "a4", "text": "Enables IPv4 and IPv6 to utilize the same network interface and media.", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q57",
    "number": 57,
    "text": "Which two functions are performed at the LLC sublayer of the OSI data link layer? (Choose two.)",
    "type": "multiple",
    "answers": [
      { "id": "a0", "text": "Enables IPv4 and IPv6 to utilize the same network interface and media.", "isCorrect": true },
      { "id": "a1", "text": "Places information in the frame that identifies which network layer protocol is being used for the frame.", "isCorrect": true },
      { "id": "a2", "text": "Integrates various physical technologies.", "isCorrect": false },
      { "id": "a3", "text": "Implements a process to delimit fields within a Layer 2 frame.", "isCorrect": false },
      { "id": "a4", "text": "Controls the NIC responsible for sending and receiving data on the physical medium.", "isCorrect": false }
    ],
    "correctAnswers": ["a0", "a1"]
  },
  {
    "id": "q58",
    "number": 58,
    "text": "What action will occur if a switch receives a frame with the destination MAC address FF:FF:FF:FF:FF:FF?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The switch forwards it out all ports except the ingress port.", "isCorrect": true },
      { "id": "a1", "text": "The switch refreshes the timer on that entry.", "isCorrect": false },
      { "id": "a2", "text": "The switch does not forward the frame.", "isCorrect": false },
      { "id": "a3", "text": "The switch sends the frame to a connected router because the destination MAC address is not local.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q59",
    "number": 59,
    "text": "What action will occur if a switch receives a frame with the destination MAC address 01:00:5E:00:00:D9?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The switch forwards it out all ports except the ingress port.", "isCorrect": true },
      { "id": "a1", "text": "The switch does not forward the frame.", "isCorrect": false },
      { "id": "a2", "text": "The switch sends the frame to a connected router because the destination MAC address is not local.", "isCorrect": false },
      { "id": "a3", "text": "The switch shares the MAC address table entry with any connected switches.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q60",
    "number": 60,
    "text": "What action will occur if a host receives a frame with a destination MAC address of FF:FF:FF:FF:FF:FF?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The host will process the frame.", "isCorrect": true },
      { "id": "a1", "text": "The host forwards the frame to the router.", "isCorrect": false },
      { "id": "a2", "text": "The host sends the frame to the switch to update the MAC address table.", "isCorrect": false },
      { "id": "a3", "text": "The host forwards the frame to all other hosts.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q61",
    "number": 61,
    "text": "What action will occur if a switch receives a frame and does have the source MAC address in the MAC table?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The switch refreshes the timer on that entry.", "isCorrect": true },
      { "id": "a1", "text": "The switch adds it to its MAC address table associated with the port number.", "isCorrect": false },
      { "id": "a2", "text": "The switch forwards the frame to the associated port.", "isCorrect": false },
      { "id": "a3", "text": "The switch sends the frame to a connected router because the destination MAC address is not local.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q62",
    "number": 62,
    "text": "What action will occur if a host receives a frame with a destination MAC address it does not recognize?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "The host will discard the frame.", "isCorrect": true },
      { "id": "a1", "text": "The host replies to the switch with its own IP address.", "isCorrect": false },
      { "id": "a2", "text": "The host forwards the frame to all other hosts.", "isCorrect": false },
      { "id": "a3", "text": "The host returns the frame to the switch.", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  },
  {
    "id": "q63",
    "number": 63,
    "text": "Which type of UTP cable is used to connect a PC to a switch port?",
    "type": "single",
    "answers": [
      { "id": "a0", "text": "straight-through", "isCorrect": true },
      { "id": "a1", "text": "console", "isCorrect": false },
      { "id": "a2", "text": "rollover", "isCorrect": false },
      { "id": "a3", "text": "crossover", "isCorrect": false }
    ],
    "correctAnswers": ["a0"]
  }
];

export default QUESTIONS_DATA;

