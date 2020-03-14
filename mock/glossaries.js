const delay = require('mocker-api/utils/delay');
const data= {
    'GET /api/glossaries': [
        {
            "id":20,
            "title":"51% Attack",
            "slug":"51-percent-attack",
            "excerpt":"Also known as a Majority Attack. When one or a group of miners control greater than 50% of the network's mining hashrate or computational power.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":21,
            "title":"Absolute Advantage",
            "slug":"absolute-advantage",
            "excerpt":"An economics concept in which one party has a direct advantage in efficiency in producing/providing a specific good or service over another party.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":205,
            "title":"Active Management",
            "slug":"active-management",
            "excerpt":"An investing strategy employed by fund managers aiming to outperform an index or market in order to generate profits."
        },
        {
            "id":22,
            "title":"Ad Hoc",
            "slug":"ad-hoc",
            "excerpt":"A phrase of Latin origin that is used in modern English to mean 'for this purpose' or 'specifically for this.'"
        },
        {
            "id":23,
            "title":"Address",
            "slug":"address",
            "excerpt":"String of text that designates the location of a particular wallet on the blockchain. Often a hashed version of a public key.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":24,
            "title":"Airdrop",
            "slug":"airdrop",
            "excerpt":"The distribution of digital assets to the public, either by virtue of holding a certain other token or simply by virtue of being an active wallet address on a particular blockchain",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":25,
            "title":"Algorithm",
            "slug":"algorithm",
            "excerpt":"A sequence of unambiguous instructions used for the purpose of solving a problem.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":26,
            "title":"All or None Order (AON)",
            "slug":"all-or-none-order",
            "excerpt":"An order which once placed, must either be filled in its entirety or not at all. This prevents any partial filling of orders.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":27,
            "title":"All-Time High (ATH)",
            "slug":"all-time-high",
            "excerpt":"The highest price of a cryptocurrency in a quote​ currency, such as a dollar, BTC, ETH, or BNB",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":28,
            "title":"Allocation",
            "slug":"allocation",
            "excerpt":"An allotment of tokens or equity, that may be earned, purchased, or set aside for a certain investor, team, group, organization, or other related entity.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":32,
            "title":"Alpha",
            "slug":"alpha",
            "excerpt":"The first look at a product released by a team, consisting of the very first version of a primitive, basic software or product.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":33,
            "title":"Altcoin",
            "slug":"altcoin",
            "excerpt":"A cryptocurrency that is alternative to Bitcoin. Used to describe cryptocurrencies that are not Bitcoin.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":257,
            "title":"Angel Investor",
            "slug":"angel-investor",
            "excerpt":"Wealthy investors that seek out opportunities to provide funding for entrepreneurs or start-up companies.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":34,
            "title":"Anti Money Laundering (AML)",
            "slug":"anti-money-laundering",
            "excerpt":"A framework consisting of legal and regulatory procedures to minimize and curb the flow of funds that are generated from illegal or dubious activities.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":35,
            "title":"Application Programming Interface (API)",
            "slug":"application-programming-interface",
            "excerpt":"A collection of functions and procedures that allow users to interact/communicate with the data of an application or service, such as an exchange, to execute the features of the service programmatically.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":148,
            "title":"Application-Specific Integrated Circuit (ASIC)",
            "slug":"application-specific-integrated-circuit",
            "excerpt":"An Integrated Circuit customized for maximum performance in a particular use, rather than general-purpose use.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":37,
            "title":"Arbitrage",
            "slug":"arbitrage",
            "excerpt":"Buying and selling of assets over different markets in order to take advantage of differing prices on the same asset.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":38,
            "title":"ASIC-resistant",
            "slug":"asic-resistant",
            "excerpt":"An ASIC-resistant cryptocurrency has its protocol and mining algorithm configured in such a way that using ASIC machines to mine the coin is either impossible or brings no significant benefit when compared to traditional GPU mining.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":39,
            "title":"Ask Price",
            "slug":"asking-price",
            "excerpt":"The lowest price a seller is willing to accept on their sell order when trading an asset on an exchange.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":258,
            "title":"Asset Management",
            "slug":"asset-management",
            "excerpt":"A system or method that helps individuals or companies manage assets. Either on behalf of their clients or their own.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":259,
            "title":"Asynchronous",
            "slug":"asynchronous",
            "excerpt":"Events in electronic systems that do not happen at the same time or speed, or happen independent of the main program flow."
        },
        {
            "id":144,
            "title":"Atomic Swap",
            "slug":"atomic-swap",
            "excerpt":"Smart contract technology that enables the exchange of one cryptocurrency for another without using centralized intermediaries, such as exchanges.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":77,
            "title":"Attack surface",
            "slug":"attack-surface",
            "excerpt":"Points in a software environment where an attacker can attempt to enter or extract data from the system.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":260,
            "title":"Auction",
            "slug":"auction",
            "excerpt":"A live event where assets or services are negotiated through a bidding process, which is often led by an auctioneer."
        },
        {
            "id":212,
            "title":"Bags",
            "slug":"bags",
            "excerpt":"The portfolio of coins and tokens one is holding. Often related to a poorly performing bag of assets that investors insist to hold.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":142,
            "title":"Bear Market",
            "slug":"bear-market",
            "excerpt":"A negative trend in prices of a market. It is widely used not only in the cryptocurrency space but also in the traditional markets.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":146,
            "title":"Benchmark",
            "slug":"benchmark",
            "excerpt":"A measurement standard which can be used to gauge the performance of a particular asset or investment portfolio.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":203,
            "title":"Beta (Coefficient)",
            "slug":"beta-coefficient",
            "excerpt":"A tool used to measure the volatility of an asset in comparison to the volatility of a specific portfolio or market index.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":204,
            "title":"Beta (Release)",
            "slug":"beta-release",
            "excerpt":"An early version of a program for users to test and for a team to get feedback. Beta stage comes after the Alpha stage.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":147,
            "title":"Bid Price",
            "slug":"bid-price",
            "excerpt":"In the context of financial markets, it is the value buyers offer for an asset, such as a commodity, security, or cryptocurrency.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":163,
            "title":"Bid-Ask Spread",
            "slug":"bid-ask-spread",
            "excerpt":"The difference in price between the lowest asking price and highest bid price on the order book for an asset",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":50,
            "title":"Binance Blockchain Charity Foundation (BCF)",
            "slug":"binance-blockchain-charity-foundation",
            "excerpt":"The world's first decentralized charity platform to advocate the concept of 'blockchain for social good'."
        },
        {
            "id":52,
            "title":"Binance Community Vote",
            "slug":"binance-community-vote",
            "excerpt":"When the community has the opportunity to vote for their favorite project to win a free listing on Binance."
        },
        {
            "id":53,
            "title":"Binance Ecosystem Fund (BEF)",
            "slug":"binance-ecosystem-fund",
            "excerpt":"An initiative by Binance to collaborate with partners who care about the blockchain/cryptocurrency ecosystem."
        },
        {
            "id":54,
            "title":"Binance Labs",
            "slug":"binance-labs",
            "excerpt":"A social impact fund and an initiative to incubate, invest, and empower blockchain and cryptocurrency entrepreneurs, projects, and communities."
        },
        {
            "id":55,
            "title":"Bitcoin",
            "slug":"bitcoin",
            "excerpt":"A cryptocurrency created by the pseudonymous developer(s) Satoshi Nakamoto. The first cryptocurrency, initially described as a 'Peer-to-Peer e-cash'.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":255,
            "title":"Bitcoin Core",
            "slug":"bitcoin-core",
            "excerpt":"Leading implementation of the software that enables users to interact with the Bitcoin network. Initially released by Satoshi.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":56,
            "title":"Bitcoin Dominance",
            "slug":"bitcoin-dominance",
            "excerpt":"The ratio of Bitcoin's market capitalization versus the sum of the market capitalizations of all cryptocurrencies.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":57,
            "title":"Bitcoin Pizza",
            "slug":"bitcoin-pizza",
            "excerpt":"The infamous Papa John's Pizza that cost Laszlo Hanyecz 10,000 Bitcoin when he offered the sum to anyone who bought a pizza for him online and ordered it to his door.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":58,
            "title":"Black Swan Event",
            "slug":"black-swan-event",
            "excerpt":"An event that is often entirely unexpected and deviates from the expected result causing widespread ramifications.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":197,
            "title":"Block",
            "slug":"block",
            "excerpt":"A computer file that stores transaction data. These can then be arranged in a linear sequence, which will form a blockchain.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":129,
            "title":"Block Explorer",
            "slug":"block-explorer",
            "excerpt":"An online Blockchain webpage which allows users to browse information about blocks, transactions, balances, and transaction histories.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":128,
            "title":"Block Height",
            "slug":"block-height",
            "excerpt":"The number of blocks in the chain between itself and the first block on that blockchain (genesis block or block 0).",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":196,
            "title":"Block Reward",
            "slug":"block-reward",
            "excerpt":"The sum of coins awarded by the blockchain protocol to cryptocurrency miners for each successfully mined and validated block.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":3,
            "title":"Blockchain",
            "slug":"blockchain",
            "excerpt":"A decentralized, digitized ledger that records transaction information about a cryptocurrency in a chronological order."
        },
        {
            "id":264,
            "title":"Bloom Filter",
            "slug":"bloom-filter",
            "excerpt":"A data structure that can be used to inform the user whether a particular item is part of a set",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":51,
            "title":"BNB",
            "slug":"bnb",
            "excerpt":"Launched by Binance after an initial coin offering that ended on July 3rd, 2017. Used for receiving exchange trading fee discounts among other utilities."
        },
        {
            "id":242,
            "title":"Bollinger Bands",
            "slug":"bollinger-bands",
            "excerpt":"A technical analysis indicator that measures market volatility. It's made of two sidelong bands and a simple moving average.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":78,
            "title":"Bounty",
            "slug":"bounty",
            "excerpt":"A reward posted by a group or individual to incentivize certain work, behavior (such as referrals), or development.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":186,
            "title":"Break-Even Point (BEP)",
            "slug":"break-even-point",
            "excerpt":"The point where the total costs of an operation is equivalent to its current value or revenue.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":79,
            "title":"Breakeven Multiple",
            "slug":"breakeven-multiple",
            "excerpt":"The multiple of the current price by which an asset needs to appreciate in order to reach its previous all-time high.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":270,
            "title":"Breakout",
            "slug":"breakout",
            "excerpt":"When the price of an asset moves outside of a defined range or pattern, typically by breaking out of a support or resistance area. ",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":80,
            "title":"BUIDL",
            "slug":"buidl",
            "excerpt":"Originally derived from HODL, a term referring to keeping your heads down and focusing on building your product.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":132,
            "title":"Bull Market",
            "slug":"bull-market",
            "excerpt":"A positive trend in prices of a market. It is widely used not only in the cryptocurrency space but also in the traditional markets.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":152,
            "title":"Buy Wall",
            "slug":"buy-wall",
            "excerpt":"A single huge buy order or the composition of multiple large buy orders at the same price in the order book of a particular market.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":46,
            "title":"Candidate Block",
            "slug":"candidate-block",
            "excerpt":"A temporary block created by a mining node (miner) to add to the blockchain to receive the block rewards.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":240,
            "title":"Candlestick",
            "slug":"candlestick",
            "excerpt":"A graph representation of price action that displays the open, close, high, and low points within a certain period.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":81,
            "title":"Capitulation",
            "slug":"capitulation",
            "excerpt":"A period of strong selling activity, where investors give up their positions and sell their holdings as quickly as possible.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":82,
            "title":"Central Bank",
            "slug":"central-bank",
            "excerpt":"A financial institution that acts as a monetary authority and manages a states currency, interest rates, and money supply.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":153,
            "title":"Central Processing Unit (CPU)",
            "slug":"central-processing-unit",
            "excerpt":"The part of a computer responsible for interpreting instructions of computer programs and executing operations.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":261,
            "title":"Centralized",
            "slug":"centralized",
            "excerpt":"When the planning and decision-making mechanisms are concentrated in a particular point within a system.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":220,
            "title":"Cipher",
            "slug":"cipher",
            "excerpt":"A method for encrypting and decrypting messages. These can be divided into symmetric or asymmetric, according to their key model.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":154,
            "title":"Circulating Supply",
            "slug":"circulating-supply",
            "excerpt":"The best approximate number of cryptocurrency coins or tokens that are publicly available and circulating in the market.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":188,
            "title":"Cloud",
            "slug":"cloud",
            "excerpt":"In computer science, a shared pool of resources, which are made available to multiple users through the Internet.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":83,
            "title":"Coin",
            "slug":"coin",
            "excerpt":"A cryptocurrency or digital cash that is independent of any other platform, which is used as an exchange of value.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":194,
            "title":"Collateral",
            "slug":"collateral",
            "excerpt":"Pledging something of value against a loan to guarantee that the person taking the loan will complete repayment."
        },
        {
            "id":243,
            "title":"Colocation",
            "slug":"colocation",
            "excerpt":"A dedicated space in a data center belonging to stock exchanges which is shared with other entities such as high-frequency traders.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":164,
            "title":"Commodity Futures Trading Commission (CFTC)",
            "slug":"commodity-futures-trading-commission",
            "excerpt":"US-based agency responsible for regulating the derivatives markets, which includes options, swaps, and futures contracts.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":155,
            "title":"Confirmation Time",
            "slug":"confirmation-time",
            "excerpt":"The time elapsed when a transaction is submitted to the network and the time it is recorded into a confirmed block.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":222,
            "title":"Confluence",
            "slug":"confluence",
            "excerpt":"When multiple investment methods, technical indicators, or trading signals are combined to form a more reliable strategy.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":84,
            "title":"Credentials",
            "slug":"credentials",
            "excerpt":"Personal information. Examples include username, password, email address, qualifications and many more.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":4,
            "title":"Cryptocurrency",
            "slug":"cryptocurrency",
            "excerpt":"A digital currency that is secured by cryptography to work as a medium of exchange within a peer-to-peer (P2P) economic system.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":5,
            "title":"Cryptography",
            "slug":"cryptography",
            "excerpt":"The science of using mathematical theories and computation in order to encrypt and decrypt information.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":42,
            "title":"Custody",
            "slug":"custody",
            "excerpt":"Refers to the holding of assets on behalf of a client. Can also refer to the ownership of one's funds or assets.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":29,
            "title":"Daemon",
            "slug":"daemon",
            "excerpt":"A process operating in the background waiting for a specific event or condition in order to be activated.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":184,
            "title":"Dead Cat Bounce",
            "slug":"dead-cat-bounce",
            "excerpt":"A brief recovery in the price of a declining asset that is shortly followed by a continuation of the downtrend.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":43,
            "title":"Decentralized Application (DApp)",
            "slug":"decentralized-application",
            "excerpt":"Applications that run on a P2P network of computers rather than one central computer. This allows the software to run on the internet without being controlled by a single entity.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":85,
            "title":"Decentralized Autonomous Cooperative (DAC)",
            "slug":"decentralized-autonomous-cooperative",
            "excerpt":"An organization that is controlled by shareholders rather than a central authority.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":44,
            "title":"Decentralized Autonomous Organization (DAO)",
            "slug":"decentralized-autonomous-organization",
            "excerpt":"A system of hard-coded rules that define which actions a decentralized organization will take.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":45,
            "title":"Decentralized Exchange (DEX)",
            "slug":"decentralized-exchange",
            "excerpt":"An exchange which does not require users to deposit funds to start trading and does not hold the funds for the user. Instead, users trade directly from their own wallets.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":192,
            "title":"Decentralized Finance (DeFi)",
            "slug":"defi",
            "excerpt":"The ecosystem comprised of decentralized financial applications developed on top of blockchain networks.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":201,
            "title":"Decryption",
            "slug":"decryption",
            "excerpt":"The act of reverting an encryption process so that unreadable data (ciphertext) can be converted into readable data (plaintext).",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":237,
            "title":"Deep Web",
            "slug":"deep-web",
            "excerpt":"The part of the web that is somehow hidden, i.e., not indexed by Google and other traditional web search engines.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":149,
            "title":"Delisting",
            "slug":"delisting",
            "excerpt":"The removal of an asset from an exchange either as a request from the project team or as a decision made by the exchange.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":151,
            "title":"Design Flaw Attack",
            "slug":"design-flaw-attack",
            "excerpt":"An attack in which a malicious user purposely creates a smart-contract, decentralized market, or other software with knowledge of certain flaws in order to trick individuals interacting within the permissionless environment.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":47,
            "title":"Difficulty Bomb",
            "slug":"difficulty-bomb",
            "excerpt":'The term "difficulty bomb" denotes the increase in mining difficulty in Ethereum, as part of its migration to Proof of Stake.',
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":198,
            "title":"Divergence",
            "slug":"divergence",
            "excerpt":"When the market price of an asset and a technical indicator (e.g. RSI, Volume, MACD) are heading in opposite directions.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":219,
            "title":"Diversification",
            "slug":"diversification",
            "excerpt":"The allocation of funds across different types of assets and jurisdictions in order to reduce the overall risks.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":87,
            "title":"Do Your Own Research (DYOR)",
            "slug":"do-your-own-research",
            "excerpt":"A valuable piece of advice. It's always wise to research a coin or token yourself instead of following what others say."
        },
        {
            "id":88,
            "title":"Dollar Cost Averaging (DCA)",
            "slug":"dollar-cost-averaging",
            "excerpt":"Investing fixed dollar amounts over regular periods of time regardless of the price of the asset.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":89,
            "title":"Double Spending",
            "slug":"double-spending",
            "excerpt":"When a given amount of coins are spent more than once. Usually as a result of a race attack or a 51% attack.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":31,
            "title":"Eclipse Attack",
            "slug":"eclipse-attack",
            "excerpt":"When the majority of peers on the network are malicious and monopolize the network in order to prevent specific nodes from receiving information from honest nodes.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":253,
            "title":"Efficient Market Hypothesis (EMH)",
            "slug":"efficient-market-hypothesis-emh",
            "excerpt":"An economic theory stating financial markets reflect all available information on the price of assets at any time.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":30,
            "title":"Encryption",
            "slug":"encryption",
            "excerpt":"Conversion of information or data into a secure code in order to prevent unauthorised access to the information or data.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":60,
            "title":"Enterprise Ethereum Alliance (EEA)",
            "slug":"ethereum-enterprise-alliance",
            "excerpt":"The industry’s first global standards organization to deliver an open, standards-based architecture and specification to accelerate the adoption of Enterprise Ethereum.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":61,
            "title":"ERC-20",
            "slug":"erc-20",
            "excerpt":"A technical standard used to issue and implement tokens on the Ethereum blockchain proposed in November 2015 by Fabian Vogelsteller.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":62,
            "title":"ERC-721",
            "slug":"erc-721",
            "excerpt":"An Ethereum based non-fungible token. This means that each token is unique and as a result, not interchangeable.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":6,
            "title":"Exchange",
            "slug":"exchange",
            "excerpt":"A marketplace for cryptocurrencies where users can buy and sell coins.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":182,
            "title":"Falling Knife",
            "slug":"falling-knife",
            "excerpt":"Refers to the action of purchasing an asset while it is rapidly declining in price under the expectation that it will bounce.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":218,
            "title":"Fear Of Missing Out (FOMO)",
            "slug":"fear-of-missing-out",
            "excerpt":"The feeling of fear and anxiety that you might be missing out on a potentially profitable opportunity.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":199,
            "title":"Fear, Uncertainty and Doubt (FUD)",
            "slug":"fear-uncertainty-and-doubt",
            "excerpt":"A marketing strategy used to spread fear and insecurity among customers, traders, or investors.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":7,
            "title":"Fiat",
            "slug":"fiat",
            "excerpt":"Money that a government has declared to be legal tender.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":161,
            "title":"Fill Or Kill Order (FOK)",
            "slug":"fill-or-kill-order",
            "excerpt":"A buy or sell order which must be executed immediately in its entirety or else it will be cancelled.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":176,
            "title":"Finality",
            "slug":"finality",
            "excerpt":"The assurance or guarantee that completed (cryptocurrency) transactions cannot be altered, reversed or canceled.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":187,
            "title":"First-Mover Advantage (FMA)",
            "slug":"first-mover-advantage",
            "excerpt":"The competitive advantage of the first project to bring a service or product into a new and unexplored market or industry.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":244,
            "title":"Fiscal Policy",
            "slug":"fiscal-policy",
            "excerpt":"Describes how authorities adjusts the tax rates of a country, influencing how public funds should be collected and used.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":158,
            "title":"Flappening",
            "slug":"flappening",
            "excerpt":"The name to describe the moment when Litecoin (LTC) surpassed Bitcoin Cash (BCH) in terms of market capitalization",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":157,
            "title":"Flippening",
            "slug":"flippening",
            "excerpt":"The name to describe the moment when/if Ethereum (ETH) surpasses Bitcoin (BTC) in terms of market capitalization",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":90,
            "title":"Forced Liquidation",
            "slug":"forced-liquidation",
            "excerpt":"When a broker forcibly liquidates an investors position as a result of their position falling below the margin requirement.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":91,
            "title":"Formal Verification",
            "slug":"formal-verification",
            "excerpt":"Using mathematically rigorous proofs to ensure certain properties of cryptographic algorithms and blockchain mechanisms",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":48,
            "title":"Full Node",
            "slug":"full-node",
            "excerpt":"A computer that fully implements the entirety of rules of an underlying blockchain network and completely validates transactions and blocks on a blockchain.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":49,
            "title":"Fundamental Analysis (FA)",
            "slug":"fundamental-analysis",
            "excerpt":"Evaluating an asset based on its underlying characteristics and traits as an effort towards arriving at an intrinsic value of the asset.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":223,
            "title":"Fungibility",
            "slug":"fungibility",
            "excerpt":"The property of an asset whose individual units are indistinguishable from each other in terms of value and functionality.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":145,
            "title":"Futures Contract",
            "slug":"futures-contract",
            "excerpt":"A standardized version of forward contracts that are used as a legal agreement to buy or sell an asset in the future at an agreed upon price and date.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":195,
            "title":"Gas",
            "slug":"gas",
            "excerpt":"The pricing mechanism employed  on the Ethereum blockchain to calculate the costs of smart contracts operations and transaction fees.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":171,
            "title":"Gas Limit",
            "slug":"gas-limit",
            "excerpt":"The maximum price a cryptocurrency user is willing to pay as a fee when sending a transaction, or performing a smart contract function.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":232,
            "title":"General Public License",
            "slug":"general-public-license",
            "excerpt":"License allowing users to copy and modify software, but requires the works to be distributed under the same license."
        },
        {
            "id":135,
            "title":"Genesis Block",
            "slug":"genesis-block",
            "excerpt":"The first ever block recorded on its respective blockchain network, also referred to as Block 0 or Block 1.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":8,
            "title":"GitHub",
            "slug":"github",
            "excerpt":"A site/system/folder/repository where a team can share, collaborate, and save their open source or propietary code."
        },
        {
            "id":272,
            "title":"Golden Cross",
            "slug":"golden-cross",
            "excerpt":"A bullish chart pattern where a shorter-term moving average crosses above a longer-term moving average.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":185,
            "title":"Gossip Protocol",
            "slug":"gossip-protocol",
            "excerpt":"A particular method of asynchronous peer-to-peer communication between computer nodes of a distributed system.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":233,
            "title":"Gwei",
            "slug":"gwei",
            "excerpt":"A small denomination of Ether. It is widely used as a measure of gas prices. 1,000,000,000 wei = 1 Giga wei (Gwei)"
        },
        {
            "id":239,
            "title":"Hacker",
            "slug":"hacker",
            "excerpt":"An individual that has an advanced understanding of computer systems and networks, including programmers and cybersecurity experts.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":64,
            "title":"Halving",
            "slug":"halving",
            "excerpt":"When the block reward of a crypto asset, such as bitcoin, drops to one-half of what it was before; this is used to create a decaying rate of issuance to arrive at an eventual finite supply of a crypto asset.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":183,
            "title":"Hard Cap",
            "slug":"hard-cap",
            "excerpt":"The maximum amount of funds a project intends to raise during their Initial Coin Offering (ICO) or alternative fundraising event.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":234,
            "title":"Hash",
            "slug":"hash",
            "excerpt":"The output produced by a hash function after a piece of data is mapped. May also be referred to as hash value, hash code, or digest.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":224,
            "title":"Hash Rate",
            "slug":"hash-rate",
            "excerpt":"The speed at which a computer or mining hardware is able to calculate new hashes. Usually measured in hashes per second.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":165,
            "title":"Hashed TimeLock Contract (HTLC)",
            "slug":"hashed-timelock-contract",
            "excerpt":"Refers to a special feature that is used to create smart contracts that are able to modify payment channels.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":250,
            "title":"High-Frequency Trading (HFT)",
            "slug":"high-frequency-trading-hft",
            "excerpt":"A type of algorithmic trading that involves the execution of a large number of orders in fractions of a second.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":117,
            "title":"HODL",
            "slug":"hodl",
            "excerpt":"A typo of 'Hold' originating from bitcointalk that has also been retrofitted to be an acronym for Hold on for Dear Life - to maintain ownership of coins and not sell.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":92,
            "title":"Honeypot",
            "slug":"honeypot",
            "excerpt":"A mechanism used in computer security used to detect or counteract unauthorized access of information systems."
        },
        {
            "id":118,
            "title":"Iceberg Order",
            "slug":"iceberg-order",
            "excerpt":"A conditional order to buy or sell a large amount of assets in smaller predetermined quantities in order to conceal the total order quantity.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":248,
            "title":"Immutability",
            "slug":"immutability",
            "excerpt":"The inability to change or be changed. One of the core features behind Bitcoin and blockchain technology.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":9,
            "title":"Index",
            "slug":"index",
            "excerpt":"A financial instrument used to track the price value of a given asset or basket of assets",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":95,
            "title":"Initial Coin Offering (ICO)",
            "slug":"initial-coin-offering",
            "excerpt":"A fundraising method in which new projects will sell their cryptocurrency to investors.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":96,
            "title":"Initial Exchange Offering (IEO)",
            "slug":"initial-exchange-offering",
            "excerpt":"A fundraising method designed to reduce the risk for token purchasers by introducing a trusted intermediary between the project team and the user.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":150,
            "title":"Initial Public Offering (IPO)",
            "slug":"initial-public-offering",
            "excerpt":"Refers to the moment a private company starts offering its shares to the public for the first time.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":156,
            "title":"Integrated Circuit (IC)",
            "slug":"integrated-circuit",
            "excerpt":"A small chip, typically made of silicon, that holds a set of electronic parts such as transistors, resistors or capacitors."
        },
        {
            "id":116,
            "title":"Interoperability",
            "slug":"interoperability",
            "excerpt":"A concept of allowing blockchains to be compatible with each other and build upon each other's features and use-cases.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":247,
            "title":"InterPlanetary File System (IPFS)",
            "slug":"interplanetary-file-system-ipfs",
            "excerpt":"An open-source project building a protocol for distributed content storage and access.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":179,
            "title":"IOU",
            "slug":"iou",
            "excerpt":"An acronym which stands for “I owe you” and refers to an informal document that acknowledges a debt one party owes to another."
        },
        {
            "id":256,
            "title":"Isolated Margin",
            "slug":"isolated-margin",
            "excerpt":"The margin balance allocated to a position. Traders can manage risk by restricting the amount allocated to each position."
        },
        {
            "id":168,
            "title":"Issuance",
            "slug":"issuance",
            "excerpt":"Generation of a new cryptocurrency which occurs in a variety of different ways, depending on parameters specified by the creators.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":65,
            "title":"Jager",
            "slug":"jager",
            "excerpt":"The smallest denomination of BNB. Derived from the Telegram handle of the Binance Community Manager at the time.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":141,
            "title":"Keccak",
            "slug":"keccak",
            "excerpt":"A versatile cryptographic function designed by Guido Bertoni, Joan Daemen, Michaël Peeters, and Gilles Van Assche."
        },
        {
            "id":66,
            "title":"Know Your Customer (KYC)",
            "slug":"know-your-customer",
            "excerpt":"A standard procedure in the finance industry which allows companies to identify their customers and comply with KYC AML laws"
        },
        {
            "id":174,
            "title":"Latency",
            "slug":"latency",
            "excerpt":"The time between submitting a transaction to a network and the first confirmation of acceptance by the network.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":249,
            "title":"Law of Demand",
            "slug":"law-of-demand",
            "excerpt":"The law of demand relates to the willingness of consumers to buy a specific amount of goods or services for a particular price."
        },
        {
            "id":191,
            "title":"Layer 2",
            "slug":"layer-2",
            "excerpt":"A secondary framework or protocol that is built on top of an existing blockchain system to provide increased scalability.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":180,
            "title":"Ledger",
            "slug":"ledger",
            "excerpt":"A physical book or a digital computer file where monetary and financial transactions are tracked and recorded.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":189,
            "title":"Library",
            "slug":"library",
            "excerpt":"A collection of stable resources, which may include executable files, documentation, message templates, and written code.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":67,
            "title":"Lightning Network",
            "slug":"lightning-network",
            "excerpt":"A second layer operating on top of a blockchain, enabling increased transaction speed among participating nodes. This is one proposed scaling solution."
        },
        {
            "id":227,
            "title":"Linux",
            "slug":"linux",
            "excerpt":"A popular open-source operating system, created in 1991 by Linus Torvalds. It is used in a wide range of devices around the world.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":169,
            "title":"Liquidity",
            "slug":"liquidity",
            "excerpt":"The ability to sell or buy any given asset without causing significant fluctuations in the market price for that asset.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":177,
            "title":"Listing",
            "slug":"listing",
            "excerpt":"The addition of an asset to an exchange either as a request from the project team or as a decision made by the exchange.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":162,
            "title":"Mainnet",
            "slug":"mainnet",
            "excerpt":"A blockchain protocol which is fully developed and deployed where transactions are being broadcasted, verified, and recorded."
        },
        {
            "id":166,
            "title":"Mainnet Swap",
            "slug":"mainnet-swap",
            "excerpt":"When a coin migrates from a third party platform such as Ethereum or other token to a native on-chain token on their mainnet.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":68,
            "title":"Maker",
            "slug":"maker",
            "excerpt":"You become a “maker” when you place an order and it does not trade immediately, so your order stays in the order book and waits for someone else to fill/match with it later."
        },
        {
            "id":131,
            "title":"Malware",
            "slug":"malware",
            "excerpt":"Any software program or code that is created to infiltrate and intentionally cause damage to computer systems and networks.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":109,
            "title":"Margin Trading",
            "slug":"margin-trading",
            "excerpt":"Trading using borrowed funds  - note: this is a high risk strategy and should only be done by experienced investors."
        },
        {
            "id":110,
            "title":"Market Capitalization",
            "slug":"market-capitalization",
            "excerpt":"The total trading value of a given coin - calculated by the product of the supply of the coin by the current price.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":228,
            "title":"Market Momentum",
            "slug":"market-momentum",
            "excerpt":"The ability of a certain market to maintain a continuous increase or decrease in price within a particular timeframe."
        },
        {
            "id":111,
            "title":"Market Order",
            "slug":"market-order",
            "excerpt":"When a taker picks the best available bid or ask for a cryptocurrency, taking the price and quantity available on the order book."
        },
        {
            "id":108,
            "title":"Masternode",
            "slug":"masternode",
            "excerpt":"Nodes on a network that often require a minimum amount of a given coin staked in order to access staking rewards."
        },
        {
            "id":170,
            "title":"Maximum Supply",
            "slug":"maximum-supply",
            "excerpt":"Refers to the maximum number of coins or tokens that will be ever created for a given cryptocurrency.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":271,
            "title":"Mempool",
            "slug":"mempool",
            "excerpt":"A node’s mechanism for keeping track of unconfirmed transactions that the node has seen (but have not yet been added to a block).",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":213,
            "title":"Merged Mining",
            "slug":"merged-mining",
            "excerpt":"The act of mining two or more cryptocurrencies at the same time, without sacrificing overall mining performance",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":133,
            "title":"Merkle Tree",
            "slug":"merkle-tree",
            "excerpt":"A way of organizing and structuring large amounts of data to make it more straightforward to process. A hash-based data structure.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":112,
            "title":"Metadata",
            "slug":"metadata",
            "excerpt":"Data that includes information about other data, such as information about features of a specific transaction.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":113,
            "title":"Mining",
            "slug":"mining",
            "excerpt":"The verification of transactions on a blockchain network, in which transactions are added as entries into the blockchain ledger.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":114,
            "title":"Mining Farm",
            "slug":"mining-farm",
            "excerpt":"A collection of many miners, often in a warehouse or large data center devoted to mining cryptocurrencies",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":245,
            "title":"Monetary Policy",
            "slug":"monetary-policy",
            "excerpt":"Refers to the policies that authorities create and adopt to control the money supply and interest rates of a country.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":193,
            "title":"Moon",
            "slug":"moon",
            "excerpt":"A colloquial expression used to describe a cryptocurrency or other asset that is experiencing a strong upward market trend.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":115,
            "title":"Multisignature",
            "slug":"multisignature",
            "excerpt":"Wallet which requires another party to authorize a transaction before it is broadcasted to the network.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":200,
            "title":"Node",
            "slug":"node",
            "excerpt":"A participant on a blockchain network that communicates with other participants to ensure the security and integrity of the system.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":252,
            "title":"Non-fungible Token (NFT)",
            "slug":"non-fungible-token-nft",
            "excerpt":"A type of cryptographic token that represents a unique digital or real-world asset and isn't interchangeable.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":69,
            "title":"Nonce",
            "slug":"nonce",
            "excerpt":"A single-use arbitrary string or number generated for verification purposes to prevent replaying past transactions.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":106,
            "title":"Off-chain",
            "slug":"off-chain",
            "excerpt":"Transactions that occur off a given blockchain network, that may be later reported or batched together before submitted to the main chain.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":119,
            "title":"Offshore account",
            "slug":"offshore-account",
            "excerpt":"An account that is registered in a jurisdiction that is different to the jurisdiction of the holder's citizenship.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":207,
            "title":"One Cancels the Other Order (OCO)",
            "slug":"one-cancels-the-other-order",
            "excerpt":"A pair of orders that are created concurrently, but it is only possible for one of them to execute.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":274,
            "title":"Open-Source Software (OSS)",
            "slug":"open-source-software-oss",
            "excerpt":"Software released under a license that gives anyone the ability and right to use, update, and distribute it freely.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":10,
            "title":"Oracle",
            "slug":"oracle",
            "excerpt":"A data source or feed from a third party used for determining outcomes for smart contracts",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":190,
            "title":"Orphan Block",
            "slug":"orphan-block",
            "excerpt":"A block whose parent block is unknown, formed in older versions of Bitcoin Core, where ancestry data wasn't required.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":107,
            "title":"Paper Wallet",
            "slug":"paper-wallet",
            "excerpt":"A piece of paper on which a cryptocurrency address and its corresponding private key are physically printed out.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":206,
            "title":"Passive Management",
            "slug":"passive-management",
            "excerpt":"An investing strategy that doesn’t rely on active market exposure but rather tracks an existing economic index."
        },
        {
            "id":209,
            "title":"Peer-to-Peer (P2P)",
            "slug":"peer-to-peer",
            "excerpt":"When two or more computers are connected and share workload or resources without relying on a centralized server.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":120,
            "title":"Pegged Currency",
            "slug":"pegged-currency",
            "excerpt":"A currency where the price is designed to remain the same as a designated asset. For example: 1 USDT is pegged to 1 USD. Also referred to as a stablecoin."
        },
        {
            "id":11,
            "title":"Phishing",
            "slug":"phishing",
            "excerpt":"A malicious attack where a bad actor will attempt to obtain the credentials of a user in order to gain unauthorised access into their account.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":12,
            "title":"Plasma",
            "slug":"plasma",
            "excerpt":"An Ethereum off-chain scaling solution which may allow Etherum to greatly increase the transactions per second capablities.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":121,
            "title":"Ponzi Scheme",
            "slug":"ponzi-scheme",
            "excerpt":"A scam in which new investors' funds are used to pay returns promised to previous investors. Do not invest in these.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":246,
            "title":"Prisoner's Dilemma",
            "slug":"prisoners-dilemma",
            "excerpt":"An example that shows why two individuals might not cooperate, even if it may appear to be in their best interest.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":122,
            "title":"Private Sale",
            "slug":"private-sale",
            "excerpt":"An early stage investment round for strategic investors with a considerable amount of investible funds.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":221,
            "title":"Progressive Web application (PWA)",
            "slug":"progressive-web-application",
            "excerpt":"An application that is created through the use of modern web technologies and follows basic web standards."
        },
        {
            "id":225,
            "title":"Proof of Stake (PoS)",
            "slug":"proof-of-stake",
            "excerpt":"A consensus mechanism that reward block validators according to the amount of coins they have at stake.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":123,
            "title":"Pseudorandom",
            "slug":"pseudorandom",
            "excerpt":"The property of a definite function that can produce an outcome that passes statistical tests of randomness.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":70,
            "title":"Quantum Computing",
            "slug":"quantum-computing",
            "excerpt":"Quantum computing works using particles that can be in superposition. These particles represent qubits instead of bits and can take the value of 1, 0 or both simultaneously."
        },
        {
            "id":124,
            "title":"Race attack",
            "slug":"race-attack",
            "excerpt":"When two transactions are created with the same funds at the same time, with the intention of spending those funds twice.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":13,
            "title":"Ransomware",
            "slug":"ransomware",
            "excerpt":"A type of malware which takes over your computer and threatens to destroy or reveal files unless a ransom is paid.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":226,
            "title":"Rekt",
            "slug":"rekt",
            "excerpt":"A slang term used to define someone or something that has been destroyed or experienced catastrophic failure and a synonym for liquidated",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":229,
            "title":"Relative Strength Index (RSI)",
            "slug":"relative-strength-index",
            "excerpt":"A technical indicator that measures market momentum & used to identify overbought and oversold conditions.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":125,
            "title":"Resistance",
            "slug":"resistance",
            "excerpt":"A term in Technical Analysis (TA). When a price that is increasing finds resistance. Usually compared with previous highs."
        },
        {
            "id":126,
            "title":"Return on Investment (ROI)",
            "slug":"return-on-investment",
            "excerpt":"A measure used in order to assess the efficiency of an investment. The ratio between net profit and net cost.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":173,
            "title":"Roadmap",
            "slug":"roadmap",
            "excerpt":"A business planning technique which lays out the short and long term goals of a company within a flexible estimated timeline.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":63,
            "title":"Routing Attack",
            "slug":"routing-attack",
            "excerpt":"An attack on the Internet Service Provider level to affect uptime or participation in a web-enabled system, such as a blockchain.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":127,
            "title":"Satoshi Nakamoto",
            "slug":"satoshi-nakamoto",
            "excerpt":"The pseudonym of the creator or creators of the bitcoin protocol and whitepaper.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":138,
            "title":"Secure Asset Fund for Users (SAFU)",
            "slug":"secure-asset-fund-for-users",
            "excerpt":"Secure Asset Fund for Users is an emergency insurance fund. On the 3rd of July, 2018, Binance announced the Secure Asset Fund for Users."
        },
        {
            "id":238,
            "title":"Securities and Exchange Commission (SEC)",
            "slug":"securities-and-exchange-commission",
            "excerpt":"An independent governmental agency responsible for regulating securities markets.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":214,
            "title":"Security Audit",
            "slug":"security-audit",
            "excerpt":"A systematic analysis to evaluate how safe a system, smart contract, or blockchain is agaisnt attacks or technical failures.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":263,
            "title":"Seed Phrase",
            "slug":"seed-phrase",
            "excerpt":"A seed phrase or menmonic seed is a collection of words that can be used to access your cryptocurrency wallet.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":59,
            "title":"Segregated Witness (SegWit)",
            "slug":"segregated-witness",
            "excerpt":"A process where the transaction signatures are separated from bitcoin transactions. Allowing more transactions to fit within one block.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":262,
            "title":"Selfish Mining",
            "slug":"selfish-mining",
            "excerpt":"The strategic withholding and releasing of blocks by a miner in order to gain a competitive advantage over the network.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":172,
            "title":"Sell Wall",
            "slug":"sell-wall",
            "excerpt":"A very large limit sell order or a cumulation of sell orders at the same price level on an order book for an asset.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":241,
            "title":"Sentiment",
            "slug":"sentiment",
            "excerpt":"The overall attitude of a community in regards to a cryptocurrency or within investors towards a certain financial market.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":235,
            "title":"Sharpe Ratio",
            "slug":"sharpe-ratio",
            "excerpt":"A ratio created in 1966 that investors and economists use to assess the potential return of investment (ROI).",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":140,
            "title":"Smart Contract",
            "slug":"smart-contract",
            "excerpt":"Automated contracts that trigger certain action when predetermined conditions are met. It works like 'If…then' conditions as for instance, it needs condition C met before money can be transferred from A to B.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":215,
            "title":"Snapshot",
            "slug":"snapshot",
            "excerpt":"The ability to record the state of a blockchain ledger, storage device, or computer system at a specific point in time."
        },
        {
            "id":181,
            "title":"Source Code",
            "slug":"source-code",
            "excerpt":"Computer code, which is responsible for defining how software will function based on a list of instructions and statements."
        },
        {
            "id":143,
            "title":"Stablecoin",
            "slug":"stablecoin",
            "excerpt":"A type of cryptocurrency that is designed to maintain a stable value, rather than experiencing significant price changes.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":217,
            "title":"Staking Pool",
            "slug":"staking-pool",
            "excerpt":"A pool where stakeholders combine their staking power to increase their chance of successfully validating a new block.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":100,
            "title":"State Channel",
            "slug":"state-channel",
            "excerpt":"A two-way communication channel between two users or nodes on a network, or between a user and a service.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":231,
            "title":"Store of Value",
            "slug":"store-of-value",
            "excerpt":"A commodity, asset or currency that can be saved, retrieved and exchanged at a future date, without suffering depreciation.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":101,
            "title":"Supercomputer",
            "slug":"supercomputer",
            "excerpt":"A computer or virtual machine that operates at the highest level of currently possible computing power.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":136,
            "title":"Supply Chain",
            "slug":"supply-chain",
            "excerpt":"A network of people and businesses involved in creating and distributing a particular product or serving a particular customer."
        },
        {
            "id":102,
            "title":"Support",
            "slug":"support",
            "excerpt":"A term in Technical Analysis (TA). When a price that is decreasing finds 'support'. Usually compared with lows."
        },
        {
            "id":103,
            "title":"Taker",
            "slug":"taker",
            "excerpt":"The 'taker' is someone who decides to place an order that is instantly matched with an existing order on the order book."
        },
        {
            "id":178,
            "title":"Tank",
            "slug":"tank",
            "excerpt":"A term adopted from the traditional financial markets and describes a strong negative financial performance of a particular asset",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":104,
            "title":"Ticker",
            "slug":"ticker",
            "excerpt":"The trading 'symbol' or shortened name (typically in capital letters) that refer to a coin on a trading platform. For example: BNB",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":208,
            "title":"Token Lockup",
            "slug":"token-lockup",
            "excerpt":"Token lockup or vesting period refers to the time span in which tokens or coins are not allowed to be transferred or traded.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":105,
            "title":"Token Sale",
            "slug":"token-sale",
            "excerpt":"The issuance of tokens in exchange for another cryptocurrency. Also referred to as an Initial Coin Offering."
        },
        {
            "id":159,
            "title":"Total Supply",
            "slug":"total-supply",
            "excerpt":"Refers to the number of coins or tokens that currently exists and are either in circulation or locked somehow.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":71,
            "title":"Transaction ID (TXID)",
            "slug":"transaction-id",
            "excerpt":"Also referred to as a Transaction hash. This is a transaction identifier used to reference transactions on a blockchain."
        },
        {
            "id":72,
            "title":"Transactions Per second (TPS)",
            "slug":"transactions-per-second",
            "excerpt":"Refers to the amount of transactions that a blockchain is capable of processing each second."
        },
        {
            "id":251,
            "title":"Trustless",
            "slug":"trustless",
            "excerpt":"No single entity has authority over the system and consensus is achieved between participants who do not have to trust each other.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":134,
            "title":"Turing Complete",
            "slug":"turing-complete",
            "excerpt":"A machine that, given enough time and memory along with the necessary instructions, can solve any computational problem, no matter how complex.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":202,
            "title":"Unit of Account",
            "slug":"unit-of-account",
            "excerpt":"One of the primary properties of money. Allowing measurement and comparison of the value of different things."
        },
        {
            "id":273,
            "title":"Unspent Transaction Output (UTXO)",
            "slug":"unspent-transaction-output-utxo",
            "excerpt":"An output created in a transaction, which must be referenced in a future transaction to spend funds.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":73,
            "title":"User Interface (UI)",
            "slug":"user-interface",
            "excerpt":"The interface where interactions between humans and machines occur. It establishes how a user can interact with a machine."
        },
        {
            "id":94,
            "title":"Verification Code",
            "slug":"verification-code",
            "excerpt":"Code sent to a second device to ensure the identity of someone logging in to an account. Used for Two-Factor Authentication"
        },
        {
            "id":74,
            "title":"Virtual Machine",
            "slug":"virtual-machine",
            "excerpt":"An emulated computer system, or a distributed system that is designed to replicate the features of a computer's architecture.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":160,
            "title":"Vladimir Club",
            "slug":"vladimir-club",
            "excerpt":"A term used to describe someone who has acquired 1% of 1% (0.01%) of the maximum supply of a cryptocurrency.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":137,
            "title":"Volatility",
            "slug":"volatility",
            "excerpt":"How quickly and how much the price of an asset changes. Calculated in terms of standard deviations in the annual return of an asset over a set period of time.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":254,
            "title":"Volume",
            "slug":"volume",
            "excerpt":"A measurement of the number of individual units of an asset that changed hands in a market during a given time."
        },
        {
            "id":93,
            "title":"Wallet",
            "slug":"wallet",
            "excerpt":"Used to send and receive cryptocurrencies. Different types include software wallets, hardware wallets, and paper wallets."
        },
        {
            "id":210,
            "title":"Weak Hands",
            "slug":"weak-hands",
            "excerpt":"A term referring to traders or investors who lack the confidence to hold their assets or to follow their trading plans.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":236,
            "title":"Weak Subjectivity",
            "slug":"weak-subjectivity",
            "excerpt":"Relates to the need for certain nodes to rely on other nodes when determining the current state of a PoS blockchain."
        },
        {
            "id":76,
            "title":"Web 1.0",
            "slug":"web-1",
            "excerpt":"The initial iteration of the web, when data was primarily read-only pages connected with hyperlinks. Also known as 'read-only' web.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":167,
            "title":"Wei",
            "slug":"wei",
            "excerpt":"The smallest possible denomination of ether (ETH), the currency used on the Ethereum network. Often used when referring to gas prices.",
            "difficulty_id":1,
            "difficulty":{
                "level":1,
                "title":"beginner"
            }
        },
        {
            "id":216,
            "title":"Whale",
            "slug":"whale",
            "excerpt":"An individual or organization that holds a large amount of Bitcoins or other cryptocurrency, allowing them to impact the markets."
        },
        {
            "id":75,
            "title":"Whiskers",
            "slug":"whiskers",
            "excerpt":"The lines extending from the colored bar in a candlestick chart that indicate the full low-high range of a trading pair within a certain time frame. Also referred to as wicks or shadows.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":211,
            "title":"Whitelist",
            "slug":"whitelist",
            "excerpt":"A list of allowed or trusted individuals, computer programs, or cryptocurrency addresses in relation to a service or event."
        },
        {
            "id":139,
            "title":"Wick",
            "slug":"wick",
            "excerpt":"A line found on a candlestick chart which is used to indicate where the price of an asset is fluctuating in regards to its opening and closing prices."
        },
        {
            "id":175,
            "title":"Wrapped Ether (WETH)",
            "slug":"wrapped-ether",
            "excerpt":"ERC-20 token representing Ether at a 1:1 ratio. It allows users to trade ETH to ERC-20 tokens on decentralized platforms.",
            "difficulty_id":2,
            "difficulty":{
                "level":2,
                "title":"intermediate"
            }
        },
        {
            "id":41,
            "title":"Zero-Knowledge Proofs",
            "slug":"zero-knowledge-proofs",
            "excerpt":"Proofs to verify that transactions are valid without revealing any information about these transactions, providing privacy to the transaction while maintaining its legitimacy.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        },
        {
            "id":40,
            "title":"Zk-Snarks",
            "slug":"zk-snarks",
            "excerpt":"“Zero-Knowledge Succinct Non-Interactive Argument of Knowledge” - an approach to zero knowledge proofs.",
            "difficulty_id":3,
            "difficulty":{
                "level":3,
                "title":"advanced"
            }
        }
    ]
}
//使用delay方法可以延迟返回数据
module.exports=delay(data,1000);