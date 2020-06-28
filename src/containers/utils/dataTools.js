
class DataTools {
    //保留二位小数
    //props NUm  传入数据 decimals 保留小数的位数，multiple 原数据扩大的倍数
    //return string || undefind
    toFixed = (num, decimals = 2, multiple = 1) => {
       
        
        if (Number.isNaN(Number(num)) && num !== null && num !== '') {
            return (num * multiple).toFixed(decimals);
        }
    }
    //千分位
    // props num 传入的数据  decimals保留小数的位数 ，multiple愿数据扩大的倍数
    // return string || -
    thousandSepartor = (num, decimals = 0, multiple = 1) => {
        if (!Number.isNaN(Number(num)) && num !== null && num !== '') {
            //分割小数点和整数部分
            num = (num * multiple).toFixed(decimals);
            num = num.split('.');
            if (num[0] == '-0') {
                //如果值位负零点几的时候bug
                num[0] = `-${Number(num[0]).toLocaleString()}`;
            }
            else {
                //整数部分➕千分位
                num[0] = Number(num[0].toLocaleString());
            }
            //合并整数小数部分
            return num.join('.');
        }
        return '-';
    }
    //保存位百分比形式
    percentumData = (data, decimals = 2) => {
        const strData = parseFloat(data) * 100;
        const retData = strData.toFixed(decimals) + '%';
        if (retData == 'NaN%') {
            return '-';
        }
        return retData;
    }
    //判断字符串的类型是否为空
    renderTryData = data => {
        if (typeof data == 'undefined') {
            return '-';
        } else if (data == 0) {
            return 0;
        } else if (data == '' || data == null) {
            return '-';
        }
        return data;
    }
    //判断数据位空时，返回无数据
    renderTextData = data => {
        if (typeof data == 'undefined') {
            return '暂无数据...';
        } else if (data == '') {
            return '暂无数据...';
        }
        return data;
    }
}
export default new DataTools();