class HomePage {
   get nextBtn() { return $("//android.widget.Button[@resource-id='com.allandroidprojects.getirsample:id/btn_next']"); }
   get mainPage() { return $("//android.widget.RelativeLayout[@resource-id='com.allandroidprojects.getirsample:id/content_main']"); }
   get waterBtn() { return $("//android.widget.TextView[@text='WATER']"); }
   get firstProduct() { return $("//android.widget.LinearLayout[@resource-id='com.allandroidprojects.getirsample:id/layout_item']"); }
   get addToCartProduct() { return $("//android.widget.TextView[@text='ADD TO CART']"); }
   get cartBtn() { return $("//android.widget.TextView[@content-desc='Cart']"); }
   get productText() { return $("//android.widget.TextView[@text='Sample Item']"); }
   get productPrice() { return $("//android.widget.TextView[@text='$1,98']"); }
   get deleteBtn() { return $("//android.widget.LinearLayout[@resource-id='com.allandroidprojects.getirsample:id/layout_action1']"); }
   get menuBtn() { return $("~Open navigation drawer"); }
   get babyCareBtn() { return $("//android.widget.CheckedTextView[@text='Baby Care']"); }
   get productsBtns() { return $$("//android.widget.FrameLayout[@resource-id='com.allandroidprojects.getirsample:id/cardview']"); }
   get detailedPrice() { return $("//android.widget.TextView[@text='$1,98']"); }

   passWelcomeScreen() { 
       this.nextBtn.click();
       this.nextBtn.click();
       this.nextBtn.click();
       this.nextBtn.click();
       expect(this.mainPage).toBeDisplayed();
   }

   addAndDeleteProduct() { 
       this.waterBtn.click();
       this.firstProduct.click();
       this.addToCartProduct.click();
       driver.back();
       this.cartBtn.click();
       expect(this.productText).toHaveAttributeContaining('text', 'Sample Item');
       expect(this.productPrice).toHaveAttributeContaining('text', '$1,98');
       this.deleteBtn.click();
   }

   openMenuAndChooseCategoryAndProduct() {
       this.menuBtn.click();
       this.babyCareBtn.click();
       this.productsBtns[2].click();
       expect(this.detailedPrice).toHaveAttributeContaining('text', '$1,98');
       driver.back();
       expect(this.mainPage).toBeDisplayed();
   }
}

module.exports = new HomePage();
