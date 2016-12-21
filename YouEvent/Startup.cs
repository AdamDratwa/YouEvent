using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(YouEvent.Startup))]
namespace YouEvent
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
