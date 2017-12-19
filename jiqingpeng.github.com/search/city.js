var provinces = {
    "A": {
        "瀹夊窘": ["鍚堣偉甯�", "鑺滄箹甯�", "铓屽煚甯�", "娣崡甯�", "椹瀺灞卞競", "娣寳甯�", "閾滈櫟甯�", "瀹夊簡甯�", "榛勫北甯�", "婊佸窞甯�", "闃滈槼甯�", "瀹垮窞甯�", "宸㈡箹甯�", "鍏畨甯�", "浜冲窞甯�", "姹犲窞甯�", "瀹ｅ煄甯�"]
    },
    "B": {
        "鍖椾含": ["鍖椾含甯�"]
    },
    "C": {
        "閲嶅簡": ["閲嶅簡甯�"]
    },
    "F": {
        "绂忓缓": ["绂忓窞甯�", "鍘﹂棬甯�", "鑾嗙敯甯�", "涓夋槑甯�", "娉夊窞甯�", "婕冲窞甯�", "鍗楀钩甯�", "榫欏博甯�", "瀹佸痉甯�"]
    },
    "G": {
        "鐢樿們": ["鍏板窞甯�", "鍢夊唱鍏冲競", "閲戞槍甯�", "鐧介摱甯�", "澶╂按甯�", "姝﹀▉甯�", "寮犳帠甯�", "骞冲噳甯�", "閰掓硥甯�", "搴嗛槼甯�", "瀹氳タ甯�", "闄囧崡甯�", "涓村鍥炴棌鑷不宸�", "鐢樺崡钘忔棌鑷不宸�"],
        "骞夸笢": ["骞垮窞甯�", "娣卞湷甯�", "鐝犳捣甯�", "姹曞ご甯�", "闊跺叧甯�", "浣涘北甯�", "姹熼棬甯�", "婀涙睙甯�", "鑼傚悕甯�", "鑲囧簡甯�", "鎯犲窞甯�", "姊呭窞甯�", "姹曞熬甯�", "娌虫簮甯�", "闃虫睙甯�", "娓呰繙甯�", "涓滆帪甯�", "涓北甯�", "娼窞甯�", "鎻槼甯�", "浜戞诞甯�"],
        "骞胯タ": ["鍗楀畞甯�", "鏌冲窞甯�", "妗傛灄甯�", "姊у窞甯�", "鍖楁捣甯�", "闃插煄娓競", "閽﹀窞甯�", "璐垫腐甯�", "鐜夋灄甯�", "鐧捐壊甯�", "璐哄窞甯�", "娌虫睜甯�", "鏉ュ甯�", "宕囧乏甯�"],
        "璐靛窞": ["璐甸槼甯�", "鍏洏姘村競", "閬典箟甯�", "瀹夐『甯�", "閾滀粊鍦板尯", "榛旇タ鍗楀竷渚濇棌鑻楁棌鑷不宸�", "姣曡妭鍦板尯", "榛斾笢鍗楄嫍鏃忎緱鏃忚嚜娌诲窞", "榛斿崡甯冧緷鏃忚嫍鏃忚嚜娌诲窞"]
    },
    "H": {
        "娴峰崡": ["娴峰彛甯�", "涓変簹甯�"],
        "娌冲寳": ["鐭冲搴勫競", "鍞愬北甯�", "绉︾殗宀涘競", "閭兏甯�", "閭㈠彴甯�", "淇濆畾甯�", "寮犲鍙ｅ競", "鎵垮痉甯�", "娌у窞甯�", "寤婂潑甯�", "琛℃按甯�"],
        "娌冲崡": ["閮戝窞甯�", "寮€灏佸競", "娲涢槼甯�", "骞抽《灞卞競", "瀹夐槼甯�", "楣ゅ甯�", "鏂颁埂甯�", "鐒︿綔甯�", "婵槼甯�", "璁告槍甯�", "婕渤甯�", "涓夐棬宄″競", "鍗楅槼甯�", "鍟嗕笜甯�", "淇￠槼甯�", "鍛ㄥ彛甯�", "椹婚┈搴楀競"],
        "榛戦緳姹�": ["鍝堝皵婊ㄥ競", "榻愰綈鍝堝皵甯�", "楦¤タ甯�", "楣ゅ矖甯�", "鍙岄腑灞卞競", "澶у簡甯�", "浼婃槬甯�", "浣虫湪鏂競", "涓冨彴娌冲競", "鐗′腹姹熷競", "榛戞渤甯�", "缁ュ寲甯�", "澶у叴瀹夊箔鍦板尯"],
        "婀栧寳": ["姝︽眽甯�", "榛勭煶甯�", "鍗佸牥甯�", "瀹滄槍甯�", "瑗勬▕甯�", "閯傚窞甯�", "鑽嗛棬甯�", "瀛濇劅甯�", "鑽嗗窞甯�", "榛勫唸甯�", "鍜稿畞甯�", "闅忓窞甯�", "鎭╂柦鍦熷鏃忚嫍鏃忚嚜娌诲窞", "绁炲啘鏋�"],
        "婀栧崡": ["闀挎矙甯�", "鏍床甯�", "婀樻江甯�", "琛￠槼甯�", "閭甸槼甯�", "宀抽槼甯�", "甯稿痉甯�", "寮犲鐣屽競", "鐩婇槼甯�", "閮村窞甯�", "姘稿窞甯�", "鎬€鍖栧競", "濞勫簳甯�", "婀樿タ鍦熷鏃忚嫍鏃忚嚜娌诲窞"]
    },
    "J": {
        "鍚夋灄": ["闀挎槬甯�", "鍚夋灄甯�", "鍥涘钩甯�", "杈芥簮甯�", "閫氬寲甯�", "鐧藉北甯�", "鏉惧師甯�", "鐧藉煄甯�", "寤惰竟鏈濋矞鏃忚嚜娌诲窞"],
        "姹熻嫃": ["鍗椾含甯�", "鏃犻敗甯�", "寰愬窞甯�", "甯稿窞甯�", "鑻忓窞甯�", "鍗楅€氬競", "杩炰簯娓競", "娣畨甯�", "鐩愬煄甯�", "鎵窞甯�", "闀囨睙甯�", "娉板窞甯�", "瀹胯縼甯�"],
        "姹熻タ": ["鍗楁槍甯�", "鏅痉闀囧競", "钀嶄埂甯�", "涔濇睙甯�", "鏂颁綑甯�", "楣版江甯�", "璧ｅ窞甯�", "鍚夊畨甯�", "瀹滄槬甯�", "鎶氬窞甯�", "涓婇ザ甯�"]
    },
    "L": {
        "杈藉畞": ["娌堥槼甯�", "澶ц繛甯�", "闉嶅北甯�", "鎶氶『甯�", "鏈邯甯�", "涓逛笢甯�", "閿﹀窞甯�", "钀ュ彛甯�", "闃滄柊甯�", "杈介槼甯�", "鐩橀敠甯�", "閾佸箔甯�", "鏈濋槼甯�", "钁姦宀涘競"]
    },
    "N": {
        "鍐呰挋鍙�": ["鍛煎拰娴╃壒甯�", "鍖呭ご甯�", "涔屾捣甯�", "璧ゅ嘲甯�", "閫氳窘甯�", "閯傚皵澶氭柉甯�", "鍛间鸡璐濆皵甯�", "宸村溅娣栧皵甯�", "涔屽叞瀵熷竷甯�", "鍏村畨鐩�", "閿℃灄閮嫆鐩�", "闃挎媺鍠勭洘"],
        "瀹佸": ["閾跺窛甯�", "鐭冲槾灞卞競", "鍚村繝甯�", "鍥哄師甯�", "涓崼甯�"]
    },
    "Q": {
        "闈掓捣": ["瑗垮畞甯�", "娴蜂笢鍦板尯", "娴峰寳钘忔棌鑷不宸�", "榛勫崡钘忔棌鑷不宸�", "娴峰崡钘忔棌鑷不宸�", "鏋滄礇钘忔棌鑷不宸�", "鐜夋爲钘忔棌鑷不宸�", "娴疯タ钂欏彜鏃忚棌鏃忚嚜娌诲窞"]
    },
    "S": {
        "灞变笢": ["娴庡崡甯�", "闈掑矝甯�", "娣勫崥甯�", "鏋ｅ簞甯�", "涓滆惀甯�", "鐑熷彴甯�", "娼嶅潑甯�", "娴庡畞甯�", "娉板畨甯�", "濞佹捣甯�", "鏃ョ収甯�", "鑾辫姕甯�", "涓存矀甯�", "寰峰窞甯�", "鑱婂煄甯�", "婊ㄥ窞甯�", "鑿忔辰甯�"],
        "灞辫タ": ["澶師甯�", "澶у悓甯�", "闃虫硥甯�", "闀挎不甯�", "鏅嬪煄甯�", "鏈斿窞甯�", "鏅嬩腑甯�", "杩愬煄甯�", "蹇诲窞甯�", "涓存本甯�", "鍚曟甯�"],
        "闄曡タ": ["瑗垮畨甯�", "閾滃窛甯�", "瀹濋浮甯�", "鍜搁槼甯�", "娓崡甯�", "寤跺畨甯�", "姹変腑甯�", "姒嗘灄甯�", "瀹夊悍甯�", "鍟嗘礇甯�"],
        "涓婃捣": ["涓婃捣甯�"],
        "鍥涘窛": ["鎴愰兘甯�", "鑷础甯�", "鏀€鏋濊姳甯�", "娉稿窞甯�", "寰烽槼甯�", "缁甸槼甯�", "骞垮厓甯�", "閬傚畞甯�", "鍐呮睙甯�", "涔愬北甯�", "鍗楀厖甯�", "鐪夊北甯�", "瀹滃甯�", "骞垮畨甯�", "杈惧窞甯�", "闆呭畨甯�", "宸翠腑甯�", "璧勯槼甯�", "闃垮潩钘忔棌缇屾棌鑷不宸�", "鐢樺瓬钘忔棌鑷不宸�", "鍑夊北褰濇棌鑷不宸�"]
    },
    "T": {
        "澶╂触": ["澶╂触甯�"]
    },
    "X": {
        "瑗胯棌": ["鎷夎惃甯�", "鏄岄兘鍦板尯", "灞卞崡鍦板尯", "鏃ュ杸鍒欏湴鍖�", "閭ｆ洸鍦板尯", "闃块噷鍦板尯", "鏋楄姖鍦板尯"],
        "鏂扮枂": ["涔岄瞾鏈ㄩ綈甯�", "鍏嬫媺鐜涗緷甯�", "鍚愰瞾鐣湴鍖�", "鍝堝瘑鍦板尯", "鏄屽悏鍥炴棌鑷不宸�", "鍗氬皵濉旀媺钂欏彜鑷不宸�", "宸撮煶閮钂欏彜鑷不宸�", "闃垮厠鑻忓湴鍖�", "鍏嬪瓬鍕掕嫃鏌皵鍏嬪瓬鑷不宸�", "鍠€浠€鍦板尯", "鍜岀敯鍦板尯", "浼婄妬鍝堣惃鍏嬭嚜娌诲窞", "濉斿煄鍦板尯", "闃垮嫆娉板湴鍖�", "鐭虫渤瀛愬競", "闃挎媺灏斿競", "鍥炬湪鑸掑厠甯�", "浜斿娓犲競"]
    },
    "Y": {
        "浜戝崡": ["鏄嗘槑甯�", "鏇查潠甯�", "鐜夋邯甯�", "淇濆北甯�", "鏄€氬競", "涓芥睙甯�", "鎬濊寘甯�", "涓存钵甯�", "妤氶泟褰濇棌鑷不宸�", "绾㈡渤鍝堝凹鏃忓綕鏃忚嚜娌诲窞", "鏂囧北澹棌鑻楁棌鑷不宸�", "瑗垮弻鐗堢撼鍌ｆ棌鑷不宸�", "澶х悊鐧芥棌鑷不宸�", "寰峰畯鍌ｆ棌鏅鏃忚嚜娌诲窞", "鎬掓睙鍌堝兂鏃忚嚜娌诲窞", "杩簡钘忔棌鑷不宸�"]
    },
    "Z": {
        "娴欐睙": ["鏉窞甯�", "瀹佹尝甯�", "娓╁窞甯�", "鍢夊叴甯�", "婀栧窞甯�", "缁嶅叴甯�", "閲戝崕甯�", "琛㈠窞甯�", "鑸熷北甯�", "鍙板窞甯�", "涓芥按甯�"]
    }
};

(function($, win, doc) {
    var CityPicker = function(el, options) {
        this.el = $(el);
        this.options = options;
        this.provinces = provinces;
        this.pro = null;
        this.city = null;
        this.elType = this.el.is('input');

        this.init();
    };

    var p = CityPicker.prototype;

    p.init = function() {
        this.initEvent();
        this.preventPopKeyboard();

    };

    p.preventPopKeyboard = function() {
        if (this.elType) {
            this.el.prop("readonly", true);
        }
    };

    p.initEvent = function() {
        this.el.on("focus", function(e) {
            var pickerBox = $(".picker-box");
            if (pickerBox[0]) {
                pickerBox.show();
            } else {
                this.create();
            }
        }.bind(this));
    };

    p.create = function() {
        this.createCityPickerBox();
        this.createProList();
        this.proClick();
        this.createNavBar();
        this.navEvent();
    };

    p.createCityPickerBox = function() {
        var proBox = "<div class='picker-box'></div>";
        $("body").append(proBox);
    };

    p.createProList = function() {
        var provinces = this.provinces;
        var proBox;
        var dl = "";
        for (var letterKey in provinces) {
            var val = provinces[letterKey];
            if (provinces.hasOwnProperty(letterKey)) {
                var dt = "<dt id='" + letterKey + "'>" + letterKey + "</dt>";
                var dd = "";
                for (var proKey in val) {
                    if (val.hasOwnProperty(proKey)) {
                        dd += "<dd data-letter=" + letterKey + ">" + proKey + "</dd>";
                    }
                }
                dl += "<dl>" + dt + dd + "</dl>";
            }
        }

        proBox = "<section class='pro-picker'>" + dl + "</section>";

        $(".picker-box").append(proBox);
    };

    p.createCityList = function(letter, pro) {
        var cities = this.provinces[letter][pro];
        var ul, li = "";
        cities.forEach(function(city, i) {
            li += "<li>" + city + "</li>";
        });

        ul = "<ul class='city-picker'>" + li + "</ul>";
        $(".picker-box").find(".city-picker").remove().end().append(ul);

        this.cityClick();
    };

    p.proClick = function() {
        var that = this;
        $(".pro-picker").on("click", function(e) {
            var target = e.target;
            if ($(target).is("dd")) {
                that.pro = $(target).html();
                var letter = $(target).data("letter");
                that.createCityList(letter, that.pro);

                $(this).hide();
            }
        });
    };

    p.cityClick = function() {
        var that = this;
        $(".city-picker").on("click", function(e) {
            var target = e.target;
            if ($(target).is("li")) {
                that.city = $(target).html();
                if (that.elType) {
                    that.el.val(that.pro + "-" + that.city);
                } else {
                    that.el.html(that.pro + "-" + that.city);
                }

                $(".picker-box").hide();
                $(".pro-picker").show();
                $(this).hide();
            }
        });
    };

    p.createNavBar = function() {
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var arr = str.split("");
        var a = "";
        arr.forEach(function(item, i) {
            a += '<a href="#' + item + '">' + item + '</a>';
        });

        var div = '<div class="navbar">' + a + '</div>';

        $(".picker-box").append(div);
    };

    p.navEvent = function() {
        var that = this;
        var navBar = $(".navbar");
        var width = navBar.find("a").width();
        var height = navBar.find("a").height();
        navBar.on("touchstart", function(e) {
            $(this).addClass("active");
            that.createLetterPrompt($(e.target).html());
        });

        navBar.on("touchmove", function(e) {
            e.preventDefault();
            var touch = e.originalEvent.touches[0];
            var pos = {
                "x": touch.pageX,
                "y": touch.pageY
            };
            var x = pos.x,
                y = pos.y;
            $(this).find("a").each(function(i, item) {
                var offset = $(item).offset();
                var left = offset.left,
                    top = offset.top;
                if (x > left && x < (left + width) && y > top && y < (top + height)) {
                    location.href = item.href;
                    that.changeLetter($(item).html());
                }
            });
        });

        navBar.on("touchend", function() {
            $(this).removeClass("active");
            $(".prompt").hide();
        })
    };

    p.createLetterPrompt = function(letter) {
        var prompt = $(".prompt");
        if (prompt[0]) {
            prompt.show();
        } else {
            var span = "<span class='prompt'>" + letter + "</span>";
            $(".picker-box").append(span);
        }
    };


    p.changeLetter = function(letter) {
        var prompt = $(".prompt");
        prompt.html(letter);
    };

    $.fn.CityPicker = function(options) {
        return new CityPicker(this, options);
    }
}(window.jQuery, window, document));