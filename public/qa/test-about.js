/**
 * Created by user on 2016/10/10.
 */
suite('"About" Page Tests',function(){
    test('page should contain link to contact page',function(){
        assert($('a[href="/contact"]').length);
    }) ;
});