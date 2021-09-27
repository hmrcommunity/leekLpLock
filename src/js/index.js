const LockAbi =[
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_lpAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "LPToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "lockAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "lockTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_ads",
                "type": "address"
            }
        ],
        "name": "isHave",
        "outputs": [
            {
                "internalType": "bool",
                "name": "ish",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "getLps",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "addres",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "voteCount",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct LeekSensible.Information[]",
                "name": "success",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "addLp",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getLockTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "removeLp",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "ert",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "setTimeLength",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const LPAbi =[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getV","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

const sc = '1000000000000000000';
function formatCoin(_num, _t) {
    let n = new BigNumber(_num);
    return _t ?  n.multipliedBy(sc) : n.dividedBy(sc);
}
function formatTime(_time) {
    return _time < 10 ? `0${_time}` : _time;
}
const myNum = $("#my-token");
const allNum = $("#all-leeks");

const bt1 = $('#btn-1');
const bt2 = $('#btn-2');
const bt5 = $('#btn-5');
const bt6 = $('#btn-6');
const bt7 = $('#btn-7');
const bt10 = $('#btn-10');
const opt = $('#open-time');
const mask = $('#mask');
const myCount = $('#my-count');
const maxToken = $('#max-token');
const addMax = $('#add-max');
const addInput = $('#add-input');
const destructionTip = $('#destruction-tip');
const bd = $('body');
const close = $('#btn-close');
const confirmExchange = $('#confirm-exchange');
const destructionTip1 = $('#destruction-tip1');
const addDestruction = $('#add-destruction');

const loading = $('#loading');
const loadingIng = $('#loading-ing');
const loadingSuccess = $('#loading-success');
const loadingErr = $('#loading-err');
const loadingBtSuc = $('#loading-bt-suc');
const loadingBtErr = $('#loading-bt-err');
const luckOpen = $('#luck-open');
const luckOpenMes = $('#luck-open-mes');
const luckClose = $('#luck-close');
const luckOpenNone = $('#luck-open-none');
const luckOpenNoneMes = $('#luck-open-none-mes');
const luckCloseNone = $('#luck-close-none');
const luckOpenOther = $('#luck-open-other');
const historyDogBox = $('#history-dog-box');
const gameRulesBtn = $('#game-rules-btn');


(async function () {
    let allowance = false;
    let tokenMaxNum = 0;
    let myLp = 0;
    let LockContractAddress = "0xD03506f47a88eC533B2DCAeB01C351718f5dB0b6";
    // let LockContractAddress = "0xf2Cbe8A6057677A665178A6cb56525d87c973D31";
    let LPContractAddress = "0x3140fc953f5e3b7d44f4affd5113658bdb12fa53";
    const web3 = new Web3();


    function authorization() {
        return new Promise(async function (resove, reject) {
            setTimeout(async () => {
                if (window.ethereum) {
                    try {
                        await window.ethereum.enable().then(function (accounts) {
                            web3.setProvider(window.ethereum);
                            web3.eth.defaultAccount = accounts[0];
                            resove({
                                type: 0,
                                value: accounts[0]
                            })
                        });
                    } catch (error) {
                        resove({
                            type: 2,
                        })
                    }
                }
            }, 200);
        })
    }

    let data = await authorization();
    let fromAddr = data.value;

    const LockContract = new web3.eth.Contract(LockAbi, LockContractAddress);
    const LPContract = new web3.eth.Contract(LPAbi, LPContractAddress);

    let timeLength = 0;
    async function getBalance(_fromAddr) {
        // LockContract.methods.getLps().call({from: _fromAddr}).then(function (data) {
        //     console.log(data)
        // });
        LockContract.methods.totalSupply().call({from: _fromAddr}).then(function (data) {
            let _v = formatCoin(data).toFixed(2);
            allNum.text(_v);
        });
        LockContract.methods.balanceOf(_fromAddr).call({from: _fromAddr}).then(function (data) {
            myLp = data.toString();
            let _v = formatCoin(data).toFixed(2);
            myNum.text(_v);
        });
        LPContract.methods.balanceOf(_fromAddr).call({from: _fromAddr}).then(function (data) {
            let _v = formatCoin(data);
            myCount.text(_v.toFixed(2));
            maxToken.text(_v);
            tokenMaxNum = _v;
        });
        timeLength = await LockContract.methods.getLockTime().call({from: _fromAddr});
    };
    getBalance(fromAddr);
    gameRulesBtn.click(function() {
        $('#game-rules-tip').toggle();
    })

    LPContract.methods.allowance(fromAddr, LockContractAddress).call({from: fromAddr}).then(function (data) {
        let _v = formatCoin(data);
        if (_v < 100000000) {
            bt2.show();
            bt1.hide();
            allowance =false;
        } else {
            bt1.show();
            bt2.hide();
            allowance =true;
        }
    });

    bt2.click(() => {
        LPContract.methods.approve(LockContractAddress, '10000000000000000000000000000').send({from: fromAddr}).then(function (data) {
            bt1.show();
            bt2.hide();
        });
    });



    bt1.click(function () {
        mask.css('display', 'flex');
    });
    close.click(function () {
        mask.hide();
    })

    addMax.click(() => {
        addInput.val(tokenMaxNum);
    });

    addInput.on('input', function(params) {
        destructionTip.hide();
    });
    // 0.000000000000000287


    confirmExchange.click(() => {
        let _v = addInput.val();
        if (_v > 0) {
            let _v = addInput.val();
            _v = new BigNumber(_v);
            if (_v.lte(tokenMaxNum)) {
                // if (true) {
                addDestruction.hide();
                loading.show();
                LockContract.methods.addLp(_v.multipliedBy(10 ** 18).toString()).send({from: fromAddr}).then((data) => {
                    loadingIng.hide();
                    loadingSuccess.css('display', 'flex');
                    getBalance(fromAddr);
                }).catch((data) => {
                    loadingIng.hide();
                    loading.show();
                    loadingErr.css('display', 'flex');
                });

            } else {
                destructionTip.text('请输入正确的数量').show();
            }
        } else {
            destructionTip.text('请输入正确的数量').show();
        }
    });

    loadingBtSuc.click(function() {
        close.click();
        addDestruction.show();
        loading.hide();
        loadingSuccess.hide();
        loadingIng.show();
    });

    loadingBtErr.click(function() {
        loading.hide();
        addDestruction.show();
        loadingSuccess.hide();
        loadingErr.hide();
        loadingIng.show();
    });

    bt10.click(function() {
        LockContract.methods.removeLp(myLp).send({from: fromAddr}).then(function (data) {
            alert("提取成功");
        });
    });


    function openTime() {
        timeLength --;
        let type = false;
        if (timeLength <= 0) {
            timeLength =0;
            type = true;
        }

        return {
            type,
            num: timeLength,
            data: type ? ['00', '00', '00', '00'] : [formatTime(parseInt(timeLength / (3600 * 24))), formatTime(parseInt(timeLength % (3600 * 24) /3600 )), formatTime(parseInt(timeLength % 3600 / 60)), formatTime(parseInt(timeLength % 3600 % 60))]
        };
    };

    setInterval(() => {
        let {type, data, num} = openTime();
        opt.html(`
        <span>${data[0]}</span>
        <span>:</span>
        <span>${data[1]}</span>
        <span>:</span>
        <span>${data[2]}</span>
        <span>:</span>
        <span>${data[3]}</span>
        `);
        if (type) {
            if (myLp > 0) {
                bt10.show();
            }
        } else {
            bt10.hide();
        }
    }, 1000);


})();
