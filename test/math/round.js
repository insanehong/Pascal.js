module( "round test" );
test('자리수를 지정하지 않은 반올림',function() {
	var rn = Pascal.round(3.141592);
	deepEqual(rn, 3, "Pascal.round(3.141592) === 3");	
});

test('소수점 첫재짜리 까지 표현',function() {
	var rn = Pascal.round(3.141592,1);
	deepEqual(rn, 3.1, "Pascal.round(3.141592,1) === 3.1");	
});

test('소수점 둘째자리 까지 표현',function() {
	var rn = Pascal.round(3.141592,2);
	deepEqual(rn, 3.14, "Pascal.round(3.141592,2) === 3.14");	
});

test('소수점 셋째자리 까지 표현',function() {
	var rn = Pascal.round(3.141592,3);
	deepEqual(rn, 3.142, "Pascal.round(3.141592,3) === 3.142");	
});

test('소수점 넷째자리 까지 표현',function() {
	var rn = Pascal.round(3.141592,4);
	deepEqual(rn, 3.1416, "Pascal.round(3.141592,4) === 3.1416");	
});

test('반올림 대상으로 문자열을 사용',function() {
	var rn = Pascal.round('hello world');
	deepEqual(rn, NaN , "Pascal.round('hello world') === NaN");	
});

test('반올림 대상으로 숫자형 문자를 사용',function() {
	var rn = Pascal.round('003.141592');
	deepEqual(rn, 3 , "Pascal.round('003.141592') === 3");	
});

test('표현할 자리수를 문자를 사용하여 넘겼을 경우',function() {
	var rn = Pascal.round(3.141592,'hello');
	deepEqual(rn, 3 , "Pascal.round(3.141592,'hello') === 3");	
});