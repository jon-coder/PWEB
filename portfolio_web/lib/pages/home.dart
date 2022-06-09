import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

import '../app_colors.dart';

import 'pages.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      color: AppColors.primaryColor,
      child: VStack([
        const HeaderPage(),
        if (context.isMobile) const IntroductionWidget().p16(),
        const MiddlePage(),
        const HeightBox(32),
        const FooterPage()
      ]).scrollVertical(),
    );
  }
}
