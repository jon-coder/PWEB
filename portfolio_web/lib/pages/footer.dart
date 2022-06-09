import 'package:flutter/widgets.dart';
import 'package:velocity_x/velocity_x.dart';

import '../app_colors.dart';

import 'pages.dart';

class FooterPage extends StatelessWidget {
  const FooterPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return VStack(
      alignment: MainAxisAlignment.center,
      crossAlignment: CrossAxisAlignment.center,
      [
        VxDevice(
          mobile: Center(
            child: VStack(
              [
                "Tem uma ideia? Vamos conversar.".text.center.white.xl2.make(),
                12.heightBox,
                "joaopaulobrasiliano@gmail.com"
                    .text
                    .color(AppColors.accentColor)
                    .semiBold
                    .make()
                    .box
                    .border(color: AppColors.accentColor)
                    .p16
                    .rounded
                    .make(),
              ],
              crossAlignment: CrossAxisAlignment.center,
            ),
          ),
          web: Center(
            child: HStack(
              [
                "Tem uma ideia? Vamos conversar.".text.center.white.xl2.make(),
                12.heightBox,
                "joaopaulobrasiliano@gmail.com"
                    .text
                    .color(AppColors.accentColor)
                    .semiBold
                    .make()
                    .box
                    .border(color: AppColors.accentColor)
                    .p16
                    .rounded
                    .make(),
              ],
              alignment: MainAxisAlignment.spaceAround,
            ).w(context.safePercentWidth * 80).scale110().px24(),
          ),
        ),
        64.heightBox,
        const CustomAppBar(),
        32.heightBox,
        "Obrigado pela atenção, ".richText.semiBold.white.withTextSpanChildren(
          ["Isso é tudo.".textSpan.gray600.make()],
        ).make(),
        32.heightBox,
      ],
    ).wFull(context).px16();
  }
}
