using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NgTest.Startup))]
namespace NgTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
